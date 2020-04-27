import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../../constant/HeaderStyle';
import {AuthService} from '../../../services/auth.service';
import {UserInfo, UserService} from '../../../../swagger';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, NavController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-profile-info',
    templateUrl: './profile-info.page.html',
    styleUrls: ['./profile-info.page.scss'],
})
export class ProfileInfoPage implements OnInit {
    headerStyle = HeaderStyle;
    lang = localStorage.getItem('lang');
    textVn: any = {
        header: 'Thông tin tài khoản',
        btn1: 'Cài đặt tài khoản',
        btn2: 'Đặt chỗ của tôi',
        logout: 'Đăng xuất',
        alertHeader: 'Thông báo',
        alertMessage: 'Bạn có chắc muốn đăng xuất khỏi ứng dụng',
        alertCancelBtn: 'Không',
        pfAvatar: 'Ảnh đại diện',
        pfUpdateInfo: 'Cập nhập thông tin',
        pfName: 'Họ và tên',
        pfEmail: 'Hộp thư điện tử',
        pfPhoneNumber: 'Số điện thoại',
        pfChangePwd: 'Đổi mật khẩu',
    };

    textEn: any = {
        header: 'Account information',
        btn1: 'Profile setting',
        btn2: 'My bookings',
        logout: 'Logout',
        alertHeader: 'Alert',
        alertMessage: 'Are you sure to remove favorite?',
        alertCancelBtn: 'Cancel',
        pfAvatar: 'Your avatar',
        pfUpdateInfo: 'Update your profile',
        pfName: 'Full name',
        pfEmail: 'Email',
        pfPhoneNumber: 'Phone number',
        pfChangePwd: 'Change password',
    };

    text: any = {};

    userInfo: UserInfo = this.authService.getUserInfo();
    updateUserInfo: FormGroup = this.fb.group({
        userId: this.fb.control(this.userInfo.userId, Validators.required),
        emailAddress: this.fb.control(this.userInfo.emailAddress, [Validators.required, Validators.email]),
        name: this.fb.control(this.userInfo.name, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
        phone: this.fb.control(this.userInfo.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    });

    constructor(private authService: AuthService,
                private fb: FormBuilder,
                private router: Router,
                private userService: UserService,
                public toastController: ToastController,
                private alertCtrl: AlertController,
                private navCtrl: NavController) {
        this.text = this.lang === 'ev' ? this.textEn : this.textVn;
    }

    ngOnInit() {
    }

    update() {
        if (!this.updateUserInfo.dirty) {return;}
        const userForm: UserInfo = {...this.updateUserInfo.value};
        this.userService.update(userForm).subscribe((userInfo: UserInfo) => {
                this.authService.setUserInfo(userInfo);
                this.presentToast();
            }
        );
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Cập nhập thông tin thành công!',
            color: 'dark',
            duration: 2000
        });
        toast.present();
    }

    changePassword() {
        this.router.navigate(['/pages', 'tabs', 'profile', 'change-password']);
    }

    async logout() {
        const alert = await this.alertCtrl.create({
            header: this.text.alertHeader,
            message: this.text.alertMessage,
            mode: 'md',
            buttons: [
                {
                    text: 'OK',
                    role: 'OK',
                    handler: () => (
                        this.authService.signOut()
                    )
                },
                {
                    text: this.text.alertCancelBtn,
                    role: 'cancel',
                    handler: () => {
                    }
                },
            ]
        });
        await alert.present();
    }

    goToBookingHistory() {
        this.navCtrl.pop()
            .then(() => this.router.navigate(['/pages', 'tabs', 'profile', 'booking-history']));
    }
}
