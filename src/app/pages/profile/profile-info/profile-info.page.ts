import { Component, OnInit } from '@angular/core';
import {HeaderStyle} from '../../../constant/HeaderStyle';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.page.html',
  styleUrls: ['./profile-info.page.scss'],
})
export class ProfileInfoPage implements OnInit {
  headerStyle = HeaderStyle;
  lang = localStorage.getItem('lang');
  textVn: any = {
    header: 'Thông tin tài khoản',
    btn1: 'Cài đặt tài khoản',
    btn2: 'Đặt chỗ của tôi'
  };

  textEn: any = {
    header: 'Account information',
    btn1: 'Profile setting',
    btn2: 'My bookings'
  };

  text: any = {};

  constructor() {
    this.text = this.lang === 'ev' ? this.textEn : this.textVn;
  }

  ngOnInit() {
  }

}
