import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../../../../swagger';
import {FormControl, Validators} from '@angular/forms';
import {ResetEmailAddress} from '../../../../../swagger/model/resetEmailAddress';
import {ResetPasswordRequestResult} from '../../../../../swagger/model/resetPasswordRequestResult';
import {NavController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-reset-form',
    templateUrl: './reset-form.component.html',
    styleUrls: ['./reset-form.component.scss'],
})
export class ResetFormComponent implements OnInit {
    lang = localStorage.getItem('lang');
    textEn: any = {
        header: 'Change password',
        formLabel: 'Email address',
        btn1: 'Go back',
        btn2: 'Send to email',
        alertMsg: 'Error !!!'
    };
    textVn: any = {
        header: 'Đổi mật khẩu',
        formLabel: 'Địa chỉ email',
        btn1: 'Quay về',
        btn2: 'Gửi đến email',
        alertMsg: 'Đã xảy ra lỗi'
    };
    text = this.lang === 'en' ? this.textEn : this.textVn;

    @Output() sendSucceeded = new EventEmitter<string>();
    emailAddress = new FormControl(null, [Validators.email, Validators.required]);
    disabledBtn: boolean;

    constructor(private userService: UserService,
                private router: Router,
                private navCtrl: NavController,
                private toastCtrl: ToastController) {
    }

    ngOnInit() {
    }

    submit() {
        this.disabledBtn = true;
        const resetEmailAddress: ResetEmailAddress = {
            emailAddress: this.emailAddress.value
        };
        this.userService.resetPassword(resetEmailAddress)
            .subscribe((res: ResetPasswordRequestResult) => {
                if (res.status === 1) {
                    this.disabledBtn = false;
                    this.onSendSucceed();
                } else {
                    this.disabledBtn = false;
                    this.warning();
                }
            });
    }

    goBack() {
        this.navCtrl.pop();
    }

    private onSendSucceed() {
        this.sendSucceeded.emit(this.emailAddress.value);
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
