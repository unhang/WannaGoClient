import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../../constant/HeaderStyle';
import {Booking, BookingService} from '../../../../swagger';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {LoadingController, NavController} from '@ionic/angular';
import {SpinnerOptService} from '../../../services/spinner-opt.service';

@Component({
    selector: 'app-booking-history',
    templateUrl: './booking-history.page.html',
    styleUrls: ['./booking-history.page.scss'],
})
export class BookingHistoryPage implements OnInit {
    headerStyle = HeaderStyle;
    lang = localStorage.getItem('lang');
    textVn: any = {
        header: 'Lịch sử đặt phòng',
        btn1: 'Cài đặt tài khoản',
        btn2: 'Đặt chỗ của tôi',
        step1Text: 'Thông tin đặt chỗ',
        step12Text: 'THÔNG TIN CÁ NHÂN',
        step13Text: '2 đêm tại S. CAMELLIA 2 _ Managed by SONG CAT HOME',
        numCustomers: 'Số khách',
        customerName: 'Tên khách hàng',
        customerPhone: 'Số điện thoại',
        customerEmail: 'Email',
        startDateBookinng: 'Ngày nhận',
        endDateBookinng: 'Ngày trả',
        time: 'Thời gian đặt phòng',
        step1TextDescription: 'Kiểm tra lại thông đặt phòng của quý khách hàng',
        bookingInfoBtn: 'Xác nhận thông tin thanh toán'
    };

    textEn: any = {
        header: 'Booking history',
        btn1: 'Profile setting',
        btn2: 'My bookings',
        step1Text: 'Booking information',
        step12Text: 'Customer information',
        step13Text: '2 đêm tại S. CAMELLIA 2 _ Managed by SONG CAT HOME',
        numCustomers: 'Amout members',
        customerName: 'Customer name',
        customerPhone: 'Customer Phone Number',
        customerEmail: 'Email',
        startDateBookinng: 'Start day booking',
        endDateBookinng: 'End day booking',
        time: 'Time booking',
        step1TextDescription: 'Check information of your booking',
        bookingInfoBtn: 'Booking info confirm'
    };
    text: any = {};

    allBooking: Booking[] = [];
    isMobile = window.innerWidth < 767;
    load: any;

    emptyMode = false;

    constructor(private router: Router,
                private loadCtrl: LoadingController,
                private spinnerOptService: SpinnerOptService,
                private authService: AuthService,
                private navCtrl: NavController,
                private bookingService: BookingService) {
        this.text = this.lang === 'ev' ? this.textEn : this.textVn;
    }


    ngOnInit() {
    }

    ionViewDidEnter() {
        this.loadCtrl.create(this.spinnerOptService.createOpts())
            .then(loadEl => {
                loadEl.present()
                    .then(() => {
                        this.bookingService.getAllBookedList(this.authService.getUserInfo().userId)
                            .subscribe((allBooking: Booking[]) => {
                                this.allBooking = allBooking;
                                this.emptyMode = allBooking.length === 0;
                                loadEl.dismiss();
                            });
                    });
            });
    }

    goToStayDetail(stayId: number) {
        this.router.navigate(['/pages', 'tabs', 'explore', stayId, 'stay']);
    }

    goToProfileInfo() {
        this.navCtrl.pop()
            .then(() => this.router.navigate(['/pages', 'tabs', 'profile', 'profile-info']));
    }

}
