import {Component} from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {AccessToken, SignIn, UserInfo, UserService} from '../../../../../swagger';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController} from '@ionic/angular';
import {SpinnerOptService} from '../../../../services/spinner-opt.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'go-form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.scss'],
})
export class GoFormLoginComponent {
    lang = localStorage.getItem('lang');
    textVn: any = {
        title: 'Đăng nhập',
        plusername: 'Tên tài khoản',
        plpassword: 'Nhập mật khẩu',
        btnLogin: 'Đăng nhập',
        linkForget: 'Quên mật khẩu?',
        linkRegister: 'Chưa có tài khoản?',
        alert: {
            header: 'Sign in failed',
            loginFailedMsg: 'Email or password was wrong',
            okBtn: 'Ok'
        },
    };
    textEn: any = {
        title: 'Login',
        plusername: 'Username',
        plpassword: 'Your password',
        btnLogin: 'Login',
        linkForget: 'Forget password?',
        linkRegister: 'Don\'t have account?',
        alert: {
            header: 'Đăng nhập thất bại',
            loginFailedMsg: 'Email hoặc mật khẩu sai',
            okBtn: 'Ok'
        },
    };
    text: any = {};

    loginForm: FormGroup = this.fb.group({
        emailAddress: this.fb.control(null, [Validators.required, Validators.email]),
        password: this.fb.control(null, Validators.required)
    });

    loadEl: any;

    constructor(private userService: UserService,
                private authService: AuthService,
                private loadCtrl: LoadingController,
                private spinnerOptService: SpinnerOptService,
                private router: Router,
                private route: ActivatedRoute,
                private alertCtrl: AlertController,
                private fb: FormBuilder) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    eventHandler(event) {
        if (event.keyCode === 13) {
            this.signIn();
        }
    }

    async signIn() {
        this.loadEl = await this.loadCtrl.create(this.spinnerOptService.createOpts());
        await this.loadEl.present();

        const signIn: SignIn = {...this.loginForm.value};
        this.userService.signIn(signIn).subscribe(
            (accessToken: AccessToken) => {
                this.authService.setAccessToken(accessToken.accessToken);
                this.getUserInfo();
            },
            error => this.loginFailedHandler()
        );
    }

    private async loginFailedHandler() {
        await this.loadEl.dismiss();
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

    getUserInfo() {
        this.userService.getUserInfo()
            .subscribe((userInfo: UserInfo) => {
                this.authService.setUserInfo(userInfo);
                this.loadEl.dismiss();

                if (this.route.snapshot.queryParams['returnUrl']) {
                    this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'])
                        .then(() => {
                            location.reload();
                        });
                } else {
                    this.router.navigate(['/pages'])
                        .then(() => {
                            location.reload();
                        });
                }
            });
    }
}
