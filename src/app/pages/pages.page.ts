import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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

    hideTabbar: boolean;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
        this.hideTabbar = this.route.snapshot.data['hideTabBar'];
        console.log(this.route.snapshot.data);
    }

    ngOnInit() {
        // this.router.
        // this.route.url.subscribe(() => {
        //     console.log(this.route.snapshot.firstChild.firstChild.data.);
        // });

        // this.route.url.subscribe(() => {
        //     console.log(this.route.snapshot.children);
        // });

        this.route.url.subscribe((res) => {
            console.log(res);
            console.log(this.route.children);
        });

        // this.route.data.subscribe((data: Data) => {
        //     console.log(data);
        //     if (data['hideTabBar']) {
        //         this.hideTabbar = data['hideTabBar'];
        //     }
        // });
    }

}
