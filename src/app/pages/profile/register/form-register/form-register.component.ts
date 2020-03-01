import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  lang = localStorage.getItem('lang');
  textVn: any = {
    title: 'Đăng ký',
    plname: 'Họ và tên',
    plemail: 'Email',
    plphone: 'Số điện thoại',
    plusername: 'Tên tài khoản',
    plpassword: 'Nhập mật khẩu',
    btnLogin: 'Mở tài khoản',
    linkForget: 'Quên mật khẩu?',
    linkRegister: 'Chưa có tài khoản?',
  };
  textEn: any = {
    title: 'Register',
    plname: 'Full name',
    plemail: 'Email',
    plphone: 'Phone number',
    plusername: 'Username',
    plpassword: 'Your password',
    btnLogin: 'Create account',
    linkForget: 'Quên mật khẩu?',
    linkRegister: 'Chưa có tài khoản?',
  };
  text: any = {};

  constructor() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

  ngOnInit() {}

}
