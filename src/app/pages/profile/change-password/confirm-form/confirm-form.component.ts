import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../../../../swagger';
import {AuthService} from '../../../../services/auth.service';
import {NewPassword} from '../../../../../swagger/model/newPassword';
import {ResetPasswordRequestResult} from '../../../../../swagger/model/resetPasswordRequestResult';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-confirm-form',
    templateUrl: './confirm-form.component.html',
    styleUrls: ['./confirm-form.component.scss'],
})
export class ConfirmFormComponent implements OnInit {
    lang = localStorage.getItem('lang');
    textEn: any = {
        header: 'New password',
        password: 'New password',
        confirmPassword: 'Confirm new password',
        passwordError: 'Password didn\' match',
        secret: 'Please fill in secret key which was sent into your email',
        btn1: 'Go back',
        btn2: 'Confirm',
        alertMsg: 'Error !!!'
    };
    textVn: any = {
        header: 'Mật khẩu mới',
        password: 'Mật khẩu mới',
        confirmPassword: 'Nhập lại mật khẩu mới',
        passwordError: 'Mật khẩu không khớp',
        secret: 'Hãy nhập mã secret được gửi trong email của bạn',
        btn1: 'Quay về',
        btn2: 'Xác nhận',
        alertMsg: 'Đã xảy ra lỗi'
    };


    text = this.lang === 'en' ? this.textEn : this.textVn;
    @Output() confirmSucceeded = new EventEmitter();

    newPasswordForm = this.fb.group({
        password: this.fb.control(null, [Validators.required]),
        confirmPassword: this.fb.control(null, [Validators.required]),
        secret: this.fb.control(null, [Validators.required])
    }, {validators: this.passwordConfirming});
    disabledBtn: boolean;

    passwordFlg = true;
    confirmPasswordFlg = true;

    passwordConfirming(c: AbstractControl): { invalid: boolean } {
        if (c.get('password').value !== c.get('confirmPassword').value) {
            return {invalid: true};
        }
    }

    constructor(private fb: FormBuilder,
                private toastCtrl: ToastController,
                private authService: AuthService,
                private userService: UserService) {
    }

    ngOnInit() {
    }

    submit() {
        this.disabledBtn = true;
        const newPassword: NewPassword = {
            emailAddress: this.authService.getUserInfo().emailAddress,
            password: this.newPasswordForm.get('password').value,
            secret: this.newPasswordForm.get('secret').value
        };
        this.userService.changePassword(newPassword)
            .subscribe((res: ResetPasswordRequestResult) => {
                if (res.status === 1) {
                    this.onConfirmSucceed();
                } else {
                    this.warning();
                }
            });
    }

    private onConfirmSucceed() {
        this.confirmSucceeded.emit();
    }

    private async warning() {
        const toast = await this.toastCtrl.create({
            message: this.text.alertMsg,
            duration: 3000,
            position: 'top',
            color: 'dark'
        });
        toast.present();
    }

}
