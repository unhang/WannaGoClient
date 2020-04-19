import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.page.html',
    styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
    lang = localStorage.getItem('lang');
    textEn: any = {
        header: 'Change password',
        passwordChanged: 'Password was changed successfully'
    };
    textVn: any = {
        header: 'Đổi mật khẩu',
        passwordChanged: 'Đổi mật khẩu thành công'
    };
    text = this.lang === 'en' ? this.textEn : this.textVn;

    CONFIRM_MODE = 'CONFIRM_MODE';
    RESET_MODE = 'RESET_MODE';

    mode = this.RESET_MODE;
    isMobile = window.innerWidth < 767;
    resetPendingEmailAddress: string;
    constructor(private toastCtrl: ToastController,
                private router: Router) {
    }

    ngOnInit() {
    }

    emailSent(payload) {
        this.resetPendingEmailAddress = payload;
        this.mode = this.CONFIRM_MODE;
    }

    async passwordDidChanged() {
        const toast = await this.toastCtrl.create({
            message: this.text.passwordChanged,
            duration: 3000,
            position: 'top',
            color: 'dark'
        });
        toast.present().then(() => {
            setInterval(() => {
                if (this.isMobile) {
                    this.router.navigate(['/pages', 'tabs', 'profile']);
                } else {
                    this.router.navigate(['/pages', 'tabs', 'profile', 'profile-info']);
                }
            }, 3000);
        });
    }
}
