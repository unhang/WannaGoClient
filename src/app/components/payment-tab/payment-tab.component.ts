import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'go-payment-tab',
    templateUrl: './payment-tab.component.html',
    styleUrls: ['./payment-tab.component.scss'],
})
export class GoPaymentTab implements OnInit {

    /*
    * mode = 1 khi ở trang chi tiết stay
    * mode = 2 khi ở trang xác nhận thanh toán,
    * */
    @Input() mode = 1;
    @Input() price = 0;
    @Output() BookingBtnClicked: EventEmitter<any> = new EventEmitter();
    lang = localStorage.getItem('lang');
    textEn: any = {
        mode1Text: 'Booking detail',
        mode1Btn: 'Book now',
    };
    textVn: any = {
        mode1Text: 'Chi tiết đặt chỗ',
        mode1Btn: 'Đặt ngay',
    };
    text: any = {};

    constructor() {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {
    }

    goToBookingInfo() {
        this.BookingBtnClicked.emit();
    }
}
