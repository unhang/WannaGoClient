import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../../constant/HeaderStyle';
import {Booking, BookingService, CommentDetail, HostInfo, HostService, StayDetail, StayService, UserInfo} from '../../../../swagger';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MockDataService} from '../../../service/mock-data.service';
import {AuthService} from '../../../services/auth.service';
import {LoadingController} from '@ionic/angular';

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
        loading: 'Xin vui lòng đợi...'
    };

    textEn: any = {
        loading: 'Please wait...'
    };
    text: any = {};

    constructor(private router: Router,
                private route: ActivatedRoute,
                private stayService: StayService,
                private hostService: HostService,
                private authService: AuthService,
                private loadCtrl: LoadingController,
                private bookingService: BookingService) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
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
        // @ts-ignore
        this.loadCtrl.create({
            mode: 'md',
            message: this.text.loading,
            spinner: 'dots'
        }).then(loadEl => {
            loadEl.present();
            this.stayService.getStayDetail(this.stayId, this.lang)
                .subscribe(stayDetail => {
                    this.stayDetail = stayDetail[0];
                    console.log(stayDetail);
                    console.log(this.stayDetail);
                    this.getHostInfo(this.stayDetail.hostId);
                    this.getStayComment();
                    loadEl.dismiss();
                });
        });

    }

    getHostInfo(hostId: number) {
        console.log('host IINFO', hostId);
        this.hostService.getHostInfo(hostId, this.lang)
            .subscribe(hostInfo => this.hostInfo = hostInfo);
    }

    getStayComment() {
        // @ts-ignore
        this.stayService.getStayComments(this.stayId, this.lang)
            .subscribe(comment => this.stayComments = comment);
    }

    goToBookingInfo() {
        const userInfo: UserInfo = this.authService.getUserInfo();
        const bookingPost: Booking = {
            userId: userInfo.userId,
            customerName: userInfo.name,
            phone: userInfo.phone,
            email: userInfo.emailAddress,
            stayId: this.stayId,
            checkIn: this.queryParams.get('check_in'),
            checkOut: this.queryParams.get('check_out'),
            guestCount: +this.queryParams.get('guest_count'),
            totalPrice: 12312312312,
            status: 1,
        };

        this.loadCtrl.create({
            mode: 'md',
            message: this.text.loading,
            spinner: 'dots'
        }).then(loadEl => {
            loadEl.present();
            this.bookingService.addBooking(bookingPost, this.lang)
                .subscribe((booking: Booking) => {
                    loadEl.dismiss();
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
        });

    }
}
