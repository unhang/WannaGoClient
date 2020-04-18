import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../../swagger';

@Component({
    selector: 'go-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class GoSignIn implements OnInit {
    lang = localStorage.getItem('lang');
    textEn: any = {
        header: 'Sign in',
        emailAddress: 'Email address',
        password: 'Password',
        btn1: 'Go back',
        btn2: 'Sign in',
        alertMsg: 'Error !!!'
    };
    textVn: any = {
        header: 'Đăng nhập',
        emailAddress: 'Địa chỉ Email',
        password: 'mật khẩu',
        passwordError: 'Mật khẩu không khớp',
        btn1: 'Quay về',
        btn2: 'Đăng nhập',
        alertMsg: 'Đã xảy ra lỗi'
    };
    text = this.lang === 'en' ? this.textEn : this.textVn;

    signInForm = this.fb.group({
        emailAddress: this.fb.control(null, [Validators.required, Validators.email]),
        password: this.fb.control(null, [Validators.required])
    });

    disabledFlg: boolean;
    passwordFlg = true;

    constructor(private fb: FormBuilder,
                private userService: UserService) {
    }

    ngOnInit() {
    }

    submit() {
        this.disabledFlg = true;
    }
}
