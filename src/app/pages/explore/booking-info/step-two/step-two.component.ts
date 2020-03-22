import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';


@Component({
    selector: 'app-step-two',
    templateUrl: './step-two.component.html',
    styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit {
    lang = localStorage.getItem('lang');
    textVn: any = {
        step2Text: 'Thanh toán',
        step2TextDescription: 'Xác nhận phương thức thanh toán',
        optionPay: 'Vui lòng lựa chọn Phương thức thanh toán',
        bookingInfoBtn: 'Xác nhận thông tin thanh toán',
        title: 'Thẻ quốc tế Visa, Master, JCB',
        description: 'Nhập thông tin hoặc lựa chọn thẻ đã lưu để tiến hành thanh toán quốc tế qua Stripe.'
    };
    textEn: any = {
        step2Text: 'Confirm and payment',
        step2TextDescription: 'Proccess to payment',
        optionPay: 'Please! select your option payment',
        bookingInfoBtn: 'Booking info confirm',
        title: 'Visa, Master Card',
        description: 'Select the option to pay your service my booking'
    };
    text: any = {};

    constructor(private fb: FormBuilder) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {


    }
}
