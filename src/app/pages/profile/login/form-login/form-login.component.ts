import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {AccessToken, SignIn, UserInfo, UserService} from '../../../../../swagger';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingController} from '@ionic/angular';
import {SpinnerOptService} from '../../../../services/spinner-opt.service';
import {ActivatedRoute, Router} from '@angular/router';

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

    loadEl: any;

    constructor(private userService: UserService,
                private authService: AuthService,
                private loadCtrl: LoadingController,
                private spinnerOptService: SpinnerOptService,
                private router: Router,
                private route: ActivatedRoute,
                private fb: FormBuilder) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {
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
            // thông thường, khi 1 Observable thành công, function đầu tiên (tên là next())tương tự như ".then()"  của Promise
            (accessToken: AccessToken) => {
                this.authService.setAccessToken(accessToken.accessToken);
                this.getUserInfo();
            },
            // trong trường hợp nó phát ra 1 error, thì function thứ 2 chính là error(),
            (error) => {
                // No.21
                // Thực thi xử lý login error từ thời điểm này trở đi
                console.log(error); // <- console.log này mang tính tham khảo, em nhớ xóa đi khi làm xong
            }
        );
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
