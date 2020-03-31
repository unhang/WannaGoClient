import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {AccessToken, SignIn, UserInfo, UserService} from '../../../../../swagger';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
        linkRegister: 'Don\'t have account?',
    };
    text: any = {};

    loginForm: FormGroup = this.fb.group({
        emailAddress: this.fb.control(null, [Validators.required, Validators.email]),
        password: this.fb.control(null, Validators.required)
    });

    constructor(private userService: UserService,
                private authService: AuthService,
                private fb: FormBuilder) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {
    }

    signIn() {
        const signIn: SignIn = {...this.loginForm.value};
        this.userService.signIn(signIn).subscribe((accessToken: AccessToken) => {
            this.authService.setAccessToken(accessToken.accessToken);
            this.getUserInfo();
        });
    }

    getUserInfo() {
        this.userService.getUserInfo()
            .subscribe((userInfo: UserInfo) => {
                console.log(userInfo);
                this.authService.setUserInfo(userInfo);
            });
    }
}
