import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../../constant/HeaderStyle';
import {Booking, BookingService, CommentDetail, HostInfo, HostService, StayDetail, StayService, UserInfo} from '../../../../swagger';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {LoadingController, ModalController, NavController} from '@ionic/angular';
import {SpinnerOptService} from '../../../services/spinner-opt.service';
import {NightCountService} from '../../../services/night-count.service';
import {TabBarService} from '../../../services/tab-bar.service';
import {GoSignIn} from '../../../components/sign-in/sign-in.component';

@Component({
    selector: 'app-stay-detail',
    templateUrl: './stay-detail.page.html',
    styleUrls: ['./stay-detail.page.scss'],
})
export class StayDetailPage implements OnInit {
    headerStyle = HeaderStyle;
    lang = localStorage.getItem('lang');

    stayId: number;
    stayDetail: StayDetail;
    hostInfo: HostInfo;
    stayComments: CommentDetail[] = [];
    queryParams: ParamMap;

    textVn: any = {};

    textEn: any = {};
    text: any = {};

    loadEl: any;
    currentUrl: string[];
    backBtnUrl: string;

    isMobile: boolean;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private stayService: StayService,
                private hostService: HostService,
                private authService: AuthService,
                private nightCountService: NightCountService,
                private loadCtrl: LoadingController,
                private tabBarService: TabBarService,
                private spinnerOptService: SpinnerOptService,
                private navCtrl: NavController,
                private modalCtrl: ModalController,
                private bookingService: BookingService) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
        this.stayId = +this.route.snapshot.params['id'];
        this.currentUrl = this.router.url.split('?');
        this.isMobile = window.innerWidth < 767;

    }

    ngOnInit() {
    }

    async ionViewDidEnter() {
        this.loadEl = await this.loadCtrl.create(this.spinnerOptService.createOpts());
        this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
            if (!this.stayId) {
                this.router.navigate(['/pages']);
            } else if (this.stayId) {
                this.queryParams = paramMap;
                this.getStayDetail();
            }
        });
        this.tabBarService.hideTabBar.next(true);
    }

    getStayDetail() {
        this.loadEl.present();
        this.stayService.getStayDetail(this.stayId, this.lang)
            .subscribe(stayDetail => {
                this.stayDetail = stayDetail;
                this.getHostInfo(this.stayDetail.hostId);
                this.getStayComment();
                this.loadEl.dismiss();
            });

    }

    resetNavRoot() {
        this.navCtrl.navigateRoot('/pages/tabs/explore/home');
    }

    getHostInfo(hostId: number) {
        this.hostService.getHostInfo(hostId, this.lang)
            .subscribe(hostInfo => this.hostInfo = hostInfo);
    }

    getStayComment() {
        // @ts-ignore
        this.stayService.getStayComments(this.stayId, this.lang)
            .subscribe(comment => this.stayComments = comment);
    }

    // return total price: (check_out - check_in) x price
    sumPrice(pricePerNight: number, discount: number): number {
        const checkIn = this.route.snapshot.queryParams['check_in'];
        const checkOut = this.route.snapshot.queryParams['check_out'];
        return (this.nightCountService.nightCount(checkIn, checkOut) / 86400000) * (discount ? discount : pricePerNight);
    }

    async goToBookingInfo() {
        let signIn: any;
        if (!this.authService.isAuthenticated) {
            const modal = await this.modalCtrl.create({
                component: GoSignIn,
                cssClass: 'custom-modal',
                swipeToClose: true
            });
            await modal.present();
            signIn = await modal.onDidDismiss();
        }
        if (signIn.role !== 'succeeded') {
            return;
        }

        // is authenticated case
        await this.loadEl.present();

        const userInfo: UserInfo = this.authService.getUserInfo();
        const bookingPost: Booking = {
            bookingId: null,
            userId: userInfo.userId,
            customerName: userInfo.name,
            phone: userInfo.phone,
            email: userInfo.emailAddress,
            stayId: this.stayId,
            stayName: this.stayDetail.stayName,
            checkIn: this.queryParams.get('check_in'),
            checkOut: this.queryParams.get('check_out'),
            guestCount: +this.queryParams.get('guest_count'),
            stripePaymentId: '',
            stripePaymentClientSecret: '',
            totalPrice: this.sumPrice(this.stayDetail.price, this.stayDetail.discount),
            status: '',
        };

        this.bookingService.addBooking(bookingPost, this.lang)
            .subscribe((booking: Booking) => {
                this.loadEl.dismiss();
                this.router.navigate(
                    ['/pages/tabs/explore/booking-info'],
                    {
                        queryParams: {
                            step: 1,
                            booking_id: booking.bookingId
                        }
                    }
                );
            });

    }

    ionViewDidLeave() {
        this.tabBarService.hideTabBar.next(false);
    }

    goBack() {
        this.navCtrl.back();
    }
}
