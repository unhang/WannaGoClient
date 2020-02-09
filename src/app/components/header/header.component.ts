import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'go-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class GoHeader implements OnInit {
    lang = localStorage.getItem('lang');
    // class style từ header.component.scss
    @Input() styles: string [] = [];

    @Input() hasSearch = false;

    textVn: any = {
        btn1: 'Trở thành chủ nhà',
        btn2: 'Trợ giúp',
        btn3: 'Đăng nhập',
        btn4: 'Đăng ký',
    };
    textEn: any = {
        btn1: 'Become host',
        btn2: 'Help',
        btn3: 'Sign up',
        btn4: 'Sign in',
    };

    text: any = {};

    constructor() {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {

    }

}
