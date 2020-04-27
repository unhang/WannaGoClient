import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AlertController, NavController} from '@ionic/angular';

@Component({
    selector: 'go-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class GoHeader implements OnInit, AfterViewInit, AfterContentInit {

    // class style từ header.component.scss
    @Input() styles: string [] = [];
    @Input() logoBlack = true;
    @Input() hasSearch = false;

    logoBlackUrl = 'https://wannago.cf/storage/library/logo1024x1024_opacity.png';
    logoWhiteUrl = 'https://wannago.cf/storage/library/logo1024x1024_color_white_opacity.png';
    mobileLogo = 'https://wannago.cf/storage/library/logo4096x4096_big_bg_opacity.png';

    lang = localStorage.getItem('lang');
    LANG = {
        EN: 'EN',
        VN: 'VN'
    };
    selectedLang = this.lang === 'en' ? this.LANG.EN : this.LANG.VN;
    textVn: any = {
        btn1: 'Trở thành chủ nhà',
        btn2: 'Trợ giúp',
        btn3: 'Đăng nhập',
        btn4: 'Đăng ký',
        btn5: 'Tài khoản',
        btn6: 'Đăng xuất',
        dropdown: {
            menu1: 'Cài đặt tài khoản',
            menu2: 'Đặt chỗ của tôi',
            menu3: 'Tiếng Việt'
        },
        alert: {
            header: 'Cảnh báo',
            message: 'Bạn có muốn xác nhận Đăng xuất',
            okBtn: 'Đồng ý',
            cancelBtn: 'Hủy'
        },
        languages: {
            EN: 'Tiếng Anh',
            VN: 'Tiếng Việt'
        },
    };
    textEn: any = {
        btn1: 'Become host',
        btn2: 'Help',
        btn3: 'Sign up',
        btn4: 'Sign in',
        btn5: 'Account',
        btn6: 'Sign out',
        dropdown: {
            menu1: 'Account setting',
            menu2: 'Booking history',
            menu3: 'English'
        },
        alert: {
            header: 'Warning',
            message: 'Are you sure to sign out',
            okBtn: 'Ok',
            cancelBtn: 'Cancel'
        },
        languages: {
            EN: 'English',
            VN: 'Vietnamese'
        },
    };
    text: any = {};

    isSignIn: boolean;
    isMobile = window.innerWidth < 767;

    constructor(private authService: AuthService,
                private alertCtrl: AlertController,
                private navCtrl: NavController) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {

    }

    ngAfterViewInit(): void {

    }

    ngAfterContentInit(): void {
        this.isSignIn = this.authService.isSignIn;
    }

    async signOut() {
        const alert = await this.alertCtrl.create({
            mode: 'md',
            header: this.text.alert.header,
            message: this.text.alert.message,
            buttons: [
                {
                    text: this.text.alert.okBtn,
                    role: 'OK',
                    handler: () => this.authService.signOut()
                },
                {
                    text: this.text.alert.cancelBtn,
                    role: 'cancel'
                }
            ],
            backdropDismiss: true
        });
        await alert.present();
    }

    resetNavRoot() {
        this.navCtrl.navigateRoot('/pages/tabs/explore/home');
    }

    saveDefaultLanguage() {
        localStorage.setItem('lang', this.selectedLang.toLocaleLowerCase());
        location.reload();
    }
}
