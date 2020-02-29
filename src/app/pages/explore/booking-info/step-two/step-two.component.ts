import { Component, OnInit } from '@angular/core';

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
    bookingInfoBtn: 'Xác nhận thông tin thanh toán'
  };
  textEn: any = {
    step2Text: 'Confirm and payment',
    step2TextDescription: 'Proccess to payment',
    optionPay: 'Please! select your option payment',
    bookingInfoBtn: 'Booking info confirm'
  };
  text: any = {};
  constructor() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

  ngOnInit() {}

}
