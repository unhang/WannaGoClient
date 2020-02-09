import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'go-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
})
export class GoTab implements OnInit {
    lang = localStorage.getItem('lang');
    textVn: any = {
        tab1: 'Khám phá',
        tab2: 'Đặt chỗ',
        tab3: 'Đã lưu',
        tab4: 'Hồ sơ',
    };

    textEn: any = {
        tab1: 'Explore',
        tab2: 'Booked',
        tab3: 'Saved',
        tab4: 'Profile',
    };

    text: any = {};

    constructor(private route: ActivatedRoute) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    activatedTab: number;

    ngOnInit() {
        this.checkActivatedTab();
    }

    checkActivatedTab() {
      this.route.data.subscribe((data: any) => this.activatedTab = data.activatedTab);
    }

}
