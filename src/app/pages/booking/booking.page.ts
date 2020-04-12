import {Component, OnInit} from '@angular/core';
import {Booking, BookingService} from '../../../swagger';
import {AuthService} from '../../services/auth.service';
import {HeaderStyle} from '../../constant/HeaderStyle';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.page.html',
    styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
    lang = localStorage.getItem('lang');
    textEn: any = {
        title: 'Your bookings',
        noBooking: 'You dont any bookings yet',
        suggestBtn: 'Click here to start booking'
    };
    textVn: any = {
        title: 'Chuyến đi',
        noBooking: 'Bạn chưa có đặt phòng nào',
        suggestBtn: 'Bấm vào đây để tìm phòng'
    };
    text: any = this.lang === 'en' ? this.textEn : this.textVn;

    pendingBookings: Booking[] = [];

    constructor(private bookingService: BookingService,
                private autheService: AuthService) {
    }

    headerStyle = HeaderStyle;

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.bookingService.getPendingList(this.autheService.getUserInfo().userId)
            .subscribe((pendingList: Booking[]) => {
                this.pendingBookings = pendingList;
                console.log(pendingList);
            });
    }
}
