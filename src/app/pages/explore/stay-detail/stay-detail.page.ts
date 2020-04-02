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

    textVn: any = {

    };

    textEn: any = {

    };
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
    }

    ngOnInit() {
    }

    async ionViewDidEnter() {
        this.loadEl = await this.loadCtrl.create(this.spinnerOptService.createOpts());
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            if (!paramMap.has('id')) {
                this.router.navigate(['/pages']);
            } else if (!this.stayId) {
                this.stayId = (+paramMap.get('id')) as number;
                this.queryParams = paramMap;
                this.getStayDetail();
            }
        });
    }

    getStayDetail() {
        this.loadEl.present();
        this.stayService.getStayDetail(this.stayId, this.lang)
            .subscribe(stayDetail => {
                console.log(stayDetail);
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

    async goToBookingInfo() {
        await this.loadEl.present();
        const userInfo: UserInfo = this.authService.getUserInfo();
        console.log(userInfo);
        const bookingPost: Booking = {
            userId: userInfo.userId,
            customerName: userInfo.name,
            phone: userInfo.phone,
            email: userInfo.emailAddress,
            stayId: this.stayId,
            checkIn: this.queryParams.get('check_in'),
            checkOut: this.queryParams.get('check_out'),
            guestCount: +this.queryParams.get('guest_count'),
            stripePaymentId: '',
            stripePaymentClientSecret: '',
            totalPrice: 12312312312,
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
}
