import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'go-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class GoHeader implements OnInit, AfterViewInit, AfterContentInit {
    lang = localStorage.getItem('lang');
    // class style từ header.component.scss
    @Input() styles: string [] = [];
    @Input() logoBlack = true;
    @Input() hasSearch = false;

    logoBlackUrl = 'https://www.tranduythien.net/wp-content/uploads/2020/02/logo_only.png';
    logoWhiteUrl = 'https://www.tranduythien.net/wp-content/uploads/2020/02/logo_white.png';

    textVn: any = {
        btn1: 'Trở thành chủ nhà',
        btn2: 'Trợ giúp',
        btn3: 'Đăng nhập',
        btn4: 'Đăng ký',
        btn5: 'Tài khoản',
        btn6: 'Đăng xuất'
    };
    textEn: any = {
        btn1: 'Become host',
        btn2: 'Help',
        btn3: 'Sign up',
        btn4: 'Sign in',
        btn5: 'Account',
        btn6: 'Sign out'
    };

    text: any = {};
    isSignIn: boolean;

    constructor(private authService: AuthService) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {

    }

    ngAfterViewInit(): void {

    }

    ngAfterContentInit(): void {
        this.isSignIn = this.authService.isSignIn;
        console.log(this.isSignIn);
    }

    signOut() {
        this.authService.signOut();
    }
}
