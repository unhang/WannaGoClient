import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AccessToken, SignIn, UserInfo, UserService} from '../../../swagger';
import {LoadingController, ModalController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import {SpinnerOptService} from '../../services/spinner-opt.service';

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
    loader: any;

    constructor(private fb: FormBuilder,
                private spinnerOptService: SpinnerOptService,
                private loadCtrl: LoadingController,
                private authService: AuthService,
                private modalCtrl: ModalController,
                private userService: UserService) {
    }

    ngOnInit() {
    }

    async submit() {
        this.loader = await this.loadCtrl.create(this.spinnerOptService.createOpts());
        this.loader.present();
        const sigin: SignIn = {
            ...this.signInForm.value
        };
        this.disabledFlg = true;
        this.userService.signIn(sigin).subscribe((accessToken: AccessToken) => {
            this.setAccessToken(accessToken.accessToken);
        });
    }

    setAccessToken(accessToken: string) {
        this.authService.setAccessToken(accessToken);
        this.userService.getUserInfo(accessToken).subscribe((userInfo: UserInfo) => {
            this.setUserInfo(userInfo);
        });
    }

    setUserInfo(userInfo: UserInfo) {
        this.authService.setUserInfo(userInfo);
        this.succeeded();
    }

    succeeded() {
        this.modalCtrl.dismiss({
            succeeded: true
        })
            .then(() => {
                this.loader.dismiss();
                this.disabledFlg = true;
                location.reload();
            });
    }

    cancel() {
        this.modalCtrl.dismiss({
            succeeded: false
        });
    }
}
