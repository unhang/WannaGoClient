import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../constant/HeaderStyle';
import {AuthService} from '../../services/auth.service';
import {ModalController} from '@ionic/angular';
import {GoSignIn} from '../../components/sign-in/sign-in.component';
import {UserInfo} from '../../../swagger';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    headerStyle = HeaderStyle;
    isMobile = window.innerWidth < 767;
    lang = localStorage.getItem('lang');
    textEn: any = {
        title: 'User Info',
        loginBtn: 'Sign in',
        noLogin: 'Please login to access this feature',
        customer: 'Customer',
        description: 'We ask our users to provide some details before going on vacation or renting a house, so please start by providing information.',
        menu: {
            title: 'Account settings',
            m1: 'User information',
            m2: 'Booking history',
            m3: 'Language',
        }
    };
    textVn: any = {
        title: 'Thông tin người dùng',
        loginBtn: 'Đăng nhập',
        noLogin: 'Xin hãy đăng nhập',
        customer: 'Khách hàng',
        description: 'Chúng tôi yêu cầu người dùng cung cấp một số thôn tin chi tiết trước khi đi nghỉ hoặc cho thuê nhà, vì vậy xin hãy bắt đầu bằng cách cung cấp thông tin',
        menu: {
            title: 'Cài đặt tài khoản',
            m1: 'Thông tin cá nhân',
            m2: 'Lịch sử đặt phòng',
            m3: 'Ngôn ngữ',
        }
    };
    txt = this.lang === 'en' ? this.textEn : this.textVn;

    isLogin = this.authService.isAuthenticated;
    userInfo: UserInfo;

    constructor(private authService: AuthService,
                private modalCtrl: ModalController) {
    }

    ngOnInit() {
        this.userInfo = this.authService.getUserInfo();
    }

    async presentModal() {
        const modal = await this.modalCtrl.create({
            component: GoSignIn,
            cssClass: 'custom-modal',
            swipeToClose: true
        });
        modal.present();
    }

}
