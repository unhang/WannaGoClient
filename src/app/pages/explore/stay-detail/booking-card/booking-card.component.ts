import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StayDetail} from '../../../../../swagger';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
    selector: 'app-booking-card',
    templateUrl: './booking-card.component.html',
    styleUrls: ['./booking-card.component.scss'],
})
export class BookingCardComponent implements OnInit {

    @Input() stayDetail: StayDetail;
    @Output() BookingBtnClicked: EventEmitter<any> = new EventEmitter();
    lang = localStorage.getItem('lang');
    private textEn: any = {
        price: 'Price per night',
        guest: 'Guest(s)',
        bookBtn: 'Book this stay',
        help: 'Contact for help'
    };
    private textVn: any = {
        price: 'Giá 1 đêm',
        guest: 'Số khách',
        bookBtn: 'Đặt phòng ngay',
        help: 'Liên hệ hỗ trợ'
    };
    text: any = {};
    guestCount;

    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.text = this.lang === 'en' ? {...this.textEn} : {...this.textVn};
    }

    ngOnInit() {
        this.route.paramMap.subscribe((paramMap: ParamMap) => this.guestCount = paramMap.get('guest'));
    }


    goToBookingInfo() {
        this.BookingBtnClicked.emit();
    }
}
