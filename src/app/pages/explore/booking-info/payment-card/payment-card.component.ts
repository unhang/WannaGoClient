import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss'],
})
export class PaymentCardComponent implements OnInit {
  lang = localStorage.getItem('lang');
  textVn: any = {
    title: 'Thanh toán bằng thẻ quốc tế Visa, Master, JCB',
    description: 'Nhập thông tin hoặc lựa chọn thẻ đã lưu để tiến hành thanh toán quốc tế qua Stripe.'
  };
  textEn: any = {
    title: 'Payment by Visa, Master Card',
    description: 'Select the option to pay your service my booking'
  };
  text: any = {};
  constructor() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

  ngOnInit() {}

}
