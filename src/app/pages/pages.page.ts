import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {
  lang = localStorage.getItem('lang');
  textVn: any = {
    tab1: 'Khám phá',
    tab2: 'Đặt chỗ',
    tab3: 'Đã lưu',
    tab4: 'Hồ sơ',
  };

  textEn: any = {
    tab1: 'Explore',
    tab2: 'Booked',
    tab3: 'Saved',
    tab4: 'Profile',
  };

  text: any = {};

  constructor() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

  ngOnInit() {
  }

}
