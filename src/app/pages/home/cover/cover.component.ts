import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-cover',
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.scss'],
})
export class CoverComponent implements OnInit {

    lang = localStorage.getItem('language')
    textVn: any = {
      title: 'NHẬN PHÒNG NGAY VỚI WANNAGO !!!',
      searchBtn: 'TÌM KIẾM'
    };
    textEn: any = {
      title: 'GET YOUR ROOM RIGHT NOW WITH WANNGO !!!',
      searchBtn: 'SEARCH'
    };

    text: any = {};

    constructor() {
    }

    ngOnInit() {
      this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

}
