import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../../constant/HeaderStyle';
import {BookingPost, BookingService, CommentDetail, HostInfo, HostService, StayDetail, StayService, UserInfo} from '../../../../swagger';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MockDataService} from '../../../service/mock-data.service';
import {AuthService} from '../../../services/auth.service';

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

    constructor(private stayService: StayService,
                private hostService: HostService,
                private router: Router,
                private route: ActivatedRoute,
                private bookingService: BookingService,
                private mockDataService: MockDataService,
                private authService: AuthService) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            if (!paramMap.has('id')) {
                this.router.navigate(['/pages']);
            } else {
                this.stayId = (+paramMap.get('id')) as number;
                this.queryParams = paramMap;
                this.getStayDetail();
            }
        });
    }

    getStayDetail() {
        // @ts-ignore
        this.stayService.getStayDetail(this.stayId, this.lang)
            .subscribe(stayDetail => {
                this.stayDetail = stayDetail;
                this.stayDetail.imgUrls = this.mockDataService.multiply<string>(this.stayDetail.imgUrls, 10);
                this.getHostInfo(this.stayDetail.hostId);
                this.getStayComment();
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

    goToBookingInfo() {
        const userInfo: UserInfo = this.authService.getUserInfo();
        const bookingPost: BookingPost = {
            userId: userInfo.userId,
            customerName: userInfo.name,
            phone: userInfo.phone,
            email: userInfo.emailAddress,
            stayId: this.stayId,
            checkIn: this.queryParams.get('check_in'),
            checkOut: this.queryParams.get('check_out'),
            guestCount: +this.queryParams.get('guest_count'),
            totalPrice: 12312312312,
            paymentCode: '',
            // statusCode chưa thanh toán nên là 1
            statusCode: 1,
            // status: ''
        };
        console.log('btn clic lcik');
        this.bookingService.addBooking(bookingPost, this.lang)
            .subscribe();
    }
}
