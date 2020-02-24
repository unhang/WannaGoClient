import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-step-one',
    templateUrl: './step-one.component.html',
    styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent implements OnInit {
    lang = localStorage.getItem('lang');
    textVn: any = {
        step1Text: 'Thông tin đặt chỗ',
        bookingInfoBtn: 'Xác nhận thông tin thanh toán'
    };
    textEn: any = {
        step1Text: 'Booking information',
        bookingInfoBtn: 'Booking info confirm'
    };
    text: any = {};

    constructor() {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {
    }

}
