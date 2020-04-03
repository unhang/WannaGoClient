import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../../constant/HeaderStyle';
import {Booking, BookingService, CommentDetail, HostInfo, HostService, StayDetail, StayService, UserInfo} from '../../../../swagger';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {LoadingController} from '@ionic/angular';
import {SpinnerOptService} from '../../../services/spinner-opt.service';

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

    constructor(private router: Router,
                private route: ActivatedRoute,
                private stayService: StayService,
                private hostService: HostService,
                private authService: AuthService,
                private loadCtrl: LoadingController,
                private spinnerOptService: SpinnerOptService,
                private bookingService: BookingService) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
        this.stayId = +this.route.snapshot.params['id'];
        console.log(this.stayId);
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
    sumPrice(pricePerNight: number): number {
        const checkInStr = this.queryParams.get('check_in').split('-');
        const checkOutStr = this.queryParams.get('check_out').split('-');
        const checkIn = new Date(+checkInStr[2], +checkInStr[1], +checkInStr[0]);
        const checkOut = new Date(+checkOutStr[2], +checkOutStr[1], +checkOutStr[0]);
        return ((checkOut.getTime() - checkIn.getTime()) / 86400000) * pricePerNight;
    }

    async goToBookingInfo() {

        if (this.authService.isAuthenticated === false) {
            console.log(this.router.url);
            this.router.navigate(['/pages', 'tabs', 'profile', 'login'], {
                queryParams: {
                    returnUrl: this.router.url || '/'
                },
            });
        }

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
            totalPrice: this.sumPrice(this.stayDetail.price),
            status: '',
        };

        this.bookingService.addBooking(bookingPost, this.lang)
            .subscribe((booking: Booking) => {
                this.loadEl.dismiss();
                console.log(booking);
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
}
