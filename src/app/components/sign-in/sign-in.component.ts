import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AccessToken, SignIn, UserInfo, UserService} from '../../../swagger';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import {SpinnerOptService} from '../../services/spinner-opt.service';
import {Router} from '@angular/router';

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
        btn3: 'Forgot password?',
        btn4: 'Create new account',
        alertMsg: 'Error !!!',
        alert: {
            header: 'Sign in failed',
            loginFailedMsg: 'Email or password was wrong',
            okBtn: 'Ok'
        }
    };
    textVn: any = {
        header: 'Đăng nhập',
        emailAddress: 'Địa chỉ Email',
        password: 'mật khẩu',
        passwordError: 'Mật khẩu không khớp',
        btn1: 'Quay về',
        btn2: 'Đăng nhập',
        btn3: 'Quên mật khẩu?',
        btn4: 'Chưa có tài khoản?',
        alertMsg: 'Đã xảy ra lỗi',
        alert: {
            header: 'Đăng nhập thất bại',
            loginFailedMsg: 'Email hoặc mật khẩu sai',
            okBtn: 'Ok'
        }
    };
    text = this.lang === 'en' ? this.textEn : this.textVn;

    signInForm = this.fb.group({
        emailAddress: this.fb.control(null, [Validators.required, Validators.email]),
        password: this.fb.control(null, [Validators.required])
    });

    disabledFlg: boolean;
    passwordFlg = true;
    loader: any;

    isMobile = window.innerWidth < 767;

    constructor(private fb: FormBuilder,
                private router: Router,
                private spinnerOptService: SpinnerOptService,
                private loadCtrl: LoadingController,
                private authService: AuthService,
                private alertCtrl: AlertController,
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
        this.userService.signIn(sigin).subscribe(
            (accessToken: AccessToken) => {
                this.setAccessToken(accessToken.accessToken);
            },
            (err) => this.loginFailedHandler()
        );
    }

    private async loginFailedHandler() {
        await this.loader.dismiss();
        const alert = await this.alertCtrl.create({
            mode: 'md',
            header: this.text.alert.header,
            message: this.text.alert.loginFailedMsg,
            buttons: [
                {
                    text: this.text.alert.okBtn,
                    role: 'OK',
                }
            ],
            backdropDismiss: true
        });
        await alert.present();
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
        this.modalCtrl
            .dismiss({succeeded: true}, 'succeeded')
            .then(() => {
                this.loader.dismiss();
                this.disabledFlg = true;
                location.reload();
            });
    }

    cancel() {
        this.modalCtrl.dismiss({succeeded: false}, 'failed');
    }


    goToResetPassword() {
        this.cancel();
        this.router.navigate(['/pages', 'tabs', 'profile', 'change-password']);
    }

    goToSignUp() {
        this.cancel();
        if (!this.isMobile) {
            this.router.navigate(['/pages', 'tabs', 'profile', 'register']);
        }
    }
}
