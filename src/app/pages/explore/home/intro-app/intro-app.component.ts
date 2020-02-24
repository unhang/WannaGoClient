import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-intro-app',
  templateUrl: './intro-app.component.html',
  styleUrls: ['./intro-app.component.scss'],
})
export class GoIntroAppComponent implements OnInit {

  lang = localStorage.getItem('lang')
  textVn: any = {
    title: 'TÌM CHỖ Ở GIÁ TỐT NHẤT',
    description: 'WannaGo hiện là nền tảng đặt phòng trực tuyến #1 Việt Nam. Đồng hành cùng chúng tôi, bạn có những chuyến đi mang đầy trải nghiệm. Với WannaGo, việc đặt chỗ ở, biệt thự nghỉ dưỡng, khách sạn, nhà riêng, chung cư... trở nên nhanh chóng, thuận tiện và dễ dàng.',
  };
  textEn: any = {
    title: 'FIND THE BEST WONDER PLACES',
    description: 'Booking, homestay, car for rent, upgrade the exp user\n' +
        'Login or Sign up to try my service',
  };

  text: any = {};

  constructor() { }

  ngOnInit() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

}
