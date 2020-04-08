import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../constant/HeaderStyle';

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
        title: 'User Info'
    };
    textVn: any = {
        title: 'Thông tin người dùng'
    };
    text = this.lang === 'en' ? this.textEn : this.textVn;

    constructor() {
    }

    ngOnInit() {
    }

}
