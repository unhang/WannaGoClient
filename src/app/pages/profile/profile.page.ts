import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../constant/HeaderStyle';
import {AuthService} from '../../services/auth.service';
import {ModalController} from '@ionic/angular';
import {GoSignIn} from '../../components/sign-in/sign-in.component';

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
        noLogin: 'Please login to access this feature'
    };
    textVn: any = {
        title: 'Thông tin người dùng',
        loginBtn: 'Đăng nhập',
        noLogin: 'Xin hãy đăng nhập'
    };
    text = this.lang === 'en' ? this.textEn : this.textVn;

    isLogin = this.authService.isAuthenticated;

    constructor(private authService: AuthService,
                private modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    async presentModal() {
        const modal = await this.modalCtrl.create({
            component: GoSignIn
        });
        modal.present();
    }

}
