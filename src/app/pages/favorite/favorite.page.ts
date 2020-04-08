import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.page.html',
    styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
    lang = localStorage.getItem('lang');
    textEn: any = {
        title: 'Saved'
    };
    textVn: any = {
        title: 'Đã lưu'
    };
    text: any = this.lang === 'en' ? this.textEn : this.textVn;

    constructor() {
    }

    ngOnInit() {
    }

}
