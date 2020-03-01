import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class GoFormLoginComponent implements OnInit {
  lang = localStorage.getItem('lang');
  textVn: any = {
    title: 'Đăng nhập',
    plusername: 'Tên tài khoản',
    plpassword: 'Nhập mật khẩu',
    btnLogin: 'Đăng nhập',
    linkForget: 'Quên mật khẩu?',
    linkRegister: 'Chưa có tài khoản?',
  };
  textEn: any = {
    title: 'Login',
    plusername: 'Username',
    plpassword: 'Your password',
    btnLogin: 'Login',
    linkForget: 'Forget password?',
    linkRegister: "Don't have account?",
  };
  text: any = {};

  constructor() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

  ngOnInit() {}

}
