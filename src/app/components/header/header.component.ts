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
        btn2: 'Trợ ',
        btn3: 'Đăng Nhập',
        btn4: 'Đăng ',
    };
    textEn: any = {};
    text: any = {};

    constructor() {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {

    }

}
