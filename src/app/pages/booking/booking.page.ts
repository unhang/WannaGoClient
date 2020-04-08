import {Component, OnInit} from '@angular/core';
import {Booking, BookingService} from '../../../swagger';
import {AuthService} from '../../services/auth.service';

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

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.bookingService.getPendingList(this.autheService.getUserInfo().userId)
            .subscribe((pendingList: Booking[]) => {
                console.log(pendingList);
            });
        this.bookingService.getCompletedList(this.autheService.getUserInfo().userId)
            .subscribe((pendingList: Booking[]) => {
                console.log(pendingList);
            });
    }
}
