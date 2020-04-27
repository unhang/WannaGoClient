import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-service',
  templateUrl: './go-service.component.html',
  styleUrls: ['./go-service.component.scss', '../home.page.scss'],
})
export class GoService implements OnInit {

  lang = localStorage.getItem('lang')
  textVn: any = {
    title: 'WANAGO CÓ TẤT CẢ CHUYẾN ĐI CỦA BẠN',
    description: 'Đặt chỗ ở, homestay, cho thuê xe, trải nghiệm và nhiều hơn nữa trên Wanago!\n' +
'Đăng nhập hoặc Đăng ký để trải nghiệm !',
  };
  textEn: any = {
    title: 'WANAGO HAVE YOUR ALL TRAVEL',
    description: 'Booking, homestay, car for rent, upgrade the exp user\n' +
  'Login or Sign up to try my service',
  };

  text: any = {};

  constructor() { }

  ngOnInit() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

}
