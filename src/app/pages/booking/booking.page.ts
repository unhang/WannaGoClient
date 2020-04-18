import {Component, OnInit} from '@angular/core';
import {Booking, BookingService} from '../../../swagger';
import {AuthService} from '../../services/auth.service';
import {HeaderStyle} from '../../constant/HeaderStyle';
import {NavController} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoginPageModule } from '../profile/login/login.module';
@Component({
    selector: 'app-booking',
    templateUrl: './booking.page.html',
    styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
    lang = localStorage.getItem('lang');
    textEn: any = {
        title: 'Your bookings',
        subTitle: 'List of stays you have been booking',
        noBooking: 'You dont any bookings yet',
        suggestBtn: 'Click here to start booking',
        loginBtn: 'Login',
        noLogin: 'Please, you need login to see your favorites!'
    };
    textVn: any = {
        title: 'Chuyến đi',
        subTitle: 'Danh sách các chuyến đi bạn đã đặt chỗ',
        noBooking: 'Bạn chưa có đặt phòng nào',
        suggestBtn: 'Bấm vào đây để tìm phòng',
        loginBtn: 'Đăng nhập',
        noLogin: 'Đăng nhập để xem các địa điểm yêu thích của bạn nhé!'
    };
    text: any = this.lang === 'en' ? this.textEn : this.textVn;

    pendingBookings: Booking[] = [];
    isLogin: boolean = false;

    constructor(private bookingService: BookingService,
                private authService: AuthService,
                public modalController: ModalController) {
    }

    headerStyle = HeaderStyle;

    ngOnInit() {
    }

    ionViewDidEnter() {
        if (this.authService.isAuthenticated === true) {
            this.isLogin = true;
            this.getBooking();
        }
    }

    getBooking() {
        this.bookingService.getPendingList(this.authService.getUserInfo().userId)
            .subscribe((pendingList: Booking[]) => {
                this.pendingBookings = pendingList;
            });
    }

    // Start Xử lí chưa đăng nhập
    async presentModal() {
        const modal = await this.modalController.create({
            component: LoginPageModule  // Modal cần show
        });
        return await modal.present();
    }
    // End Xử lí chưa đăng nhập
}
