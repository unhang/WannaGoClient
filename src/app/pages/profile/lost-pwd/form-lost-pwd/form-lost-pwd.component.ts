import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-lost-pwd',
  templateUrl: './form-lost-pwd.component.html',
  styleUrls: ['./form-lost-pwd.component.scss'],
})
export class FormLostPwdComponent implements OnInit {
  lang = localStorage.getItem('lang');
  textVn: any = {
    title: 'Quên mật khẩu',
    plname: 'Họ và tên',
    plemail: 'Email',
    plphone: 'Số điện thoại',
    plusername: 'Tên tài khoản',
    plpassword: 'Nhập mật khẩu',
    btnLogin: 'Gửi yêu cầu',
    linkForget: 'Quên mật khẩu?',
    linkRegister: 'Chưa có tài khoản?',
  };
  textEn: any = {
    title: 'For get password',
    plname: 'Full name',
    plemail: 'Email',
    plphone: 'Phone number',
    plusername: 'Username',
    plpassword: 'Your password',
    btnLogin: 'Send submit',
    linkForget: 'Quên mật khẩu?',
    linkRegister: 'Chưa có tài khoản?',
  };
  text: any = {};

  constructor() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

  ngOnInit() {}

}
