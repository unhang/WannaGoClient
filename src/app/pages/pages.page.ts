import {Component, OnInit} from '@angular/core';
import {TabBarService} from '../services/tab-bar.service';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.page.html',
    styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {
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
    hideTabBar = false;
    isMobile: boolean;
    constructor(private tabBarService: TabBarService) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
        this.isMobile = window.innerWidth < 767;
    }

    ngOnInit() {
        this.tabBarService.hideTabBar.subscribe((control) => {
            this.hideTabBar = control;
        });
    }

}
