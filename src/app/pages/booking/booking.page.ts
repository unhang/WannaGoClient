import {Component, OnInit} from '@angular/core';
import {Booking, BookingService} from '../../../swagger';
import {AuthService} from '../../services/auth.service';
import {HeaderStyle} from '../../constant/HeaderStyle';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.page.html',
    styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
    lang = localStorage.getItem('lang');
    textEn: any = {
        title: 'Your bookings'
    };
    textVn: any = {
        title: 'Chuyến đi'
    };
    text: any = this.lang === 'en' ? this.textEn : this.textVn;

    pendingBookings: Booking[] = [];

    constructor(private bookingService: BookingService,
                private autheService: AuthService
    ) {
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
