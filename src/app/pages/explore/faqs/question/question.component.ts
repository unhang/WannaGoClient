import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class GoQuestionComponent implements OnInit {

  lang = localStorage.getItem('lang')
  textVn: any = {
    title: 'NHỮNG CÂU HỎI THƯỜNG GẶP',
    description: 'WannaGo hiện là nền tảng đặt phòng trực tuyến #1 Việt Nam. Đồng hành cùng chúng tôi, bạn có những chuyến đi mang đầy trải nghiệm. Với WannaGo, việc đặt chỗ ở, biệt thự nghỉ dưỡng, khách sạn, nhà riêng, chung cư... trở nên nhanh chóng, thuận tiện và dễ dàng.',
  };
  textEn: any = {
    title: 'Frequently Asked Questions ',
    description: 'Booking, homestay, car for rent, upgrade the exp user\n' +
        'Login or Sign up to try my service',
  };

  text: any = {};

  constructor() { }

  ngOnInit() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }
}
