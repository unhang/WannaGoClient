import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit {
  lang = localStorage.getItem('lang');
  textVn: any = {
    step2Text: 'Xác nhận và thanh toán',
    bookingInfoBtn: 'Xác nhận thông tin thanh toán'
  };
  textEn: any = {
    step2Text: 'Confirm and payment',
    bookingInfoBtn: 'Booking info confirm'
  };
  text: any = {};
  constructor() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

  ngOnInit() {}

}
