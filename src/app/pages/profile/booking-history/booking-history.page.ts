import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../../constant/HeaderStyle';
import {NavController} from '@ionic/angular';

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
        btn2: 'Đặt chỗ của tôi'
    };

    textEn: any = {
        header: 'Booking history',
        btn1: 'Profile setting',
        btn2: 'My bookings'
    };

    text: any = {};

    constructor(private navCtrl: NavController) {
        this.text = this.lang === 'ev' ? this.textEn : this.textVn;
    }

    ngOnInit() {
    }

    checkNav() {
        console.log(this.navCtrl);
    }

}
