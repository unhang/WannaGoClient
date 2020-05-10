import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserInfo, UserService} from '../../../../../swagger';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {SpinnerOptService} from '../../../../services/spinner-opt.service';

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
        plpasswordConfirm: 'Xác nhận mật khẩu',
        btnLogin: 'Mở tài khoản',
        linkForget: 'Quên mật khẩu?',
        linkRegister: 'Chưa có tài khoản?',
        emailValidText: 'Email không hợp lệ'
    };
    textEn: any = {
        title: 'Register',
        plname: 'Full name',
        plemail: 'Email',
        plphone: 'Phone number',
        plusername: 'Username',
        plpassword: 'Your password',
        plpasswordConfirm: 'Confirm your password',
        btnLogin: 'Create account',
        linkForget: 'forgot password?',
        linkRegister: 'Sign up',
        emailValidText: 'Email invalid'
    };
    text: any = {};
    signUpForm: FormGroup = this.fb.group({
        // tslint:disable-next-line:max-line-length
        emailAddress: this.fb.control(null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
        password: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
        confirmPassword: this.fb.control(null, [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
        name: this.fb.control(null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
        phone: this.fb.control(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    });
    loadEl: any;
    emailInvalid = false;

    constructor(private fb: FormBuilder,
                private router: Router,
                private loadCrtl: LoadingController,
                private spinnerOptService: SpinnerOptService,
                private userService: UserService) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {
        this.createLoadEl();
    }

    async createLoadEl() {
        if (this.loadEl) {
            return;
        }
        this.loadEl = await this.loadCrtl.create(this.spinnerOptService.createOpts());
    }

    signUp() {
        if (this.signUpForm.get('emailAddress').status === "VALID") {
            this.loadEl.present();
            const userInfo: UserInfo = {...this.signUpForm.value};
            delete userInfo['confirmPassword'];
            this.userService.signUp(userInfo).subscribe((userInfo: UserInfo) => {
                    this.loadEl.dismiss();
                    this.router.navigate(['/pages/tabs/profile/login']);
                }
            );
        } else {
            this.emailInvalid = true;
            return;
        }
    }
}
