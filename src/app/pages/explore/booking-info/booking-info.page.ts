import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
    selector: 'app-booking-info',
    templateUrl: './booking-info.page.html',
    styleUrls: ['./booking-info.page.scss'],
})
export class BookingInfoPage implements OnInit {
    lang = localStorage.getItem('lang');
    textVn: any = {
        step1Text: 'Thông tin đặt chỗ',
        step2Text: 'Xác nhận và thanh toán',
        bookingInfoBtn: 'Xác nhận thông tin thanh toán'
    };
    textEn: any = {
        step1Text: 'Booking information',
        step2Text: 'Confirm and payment',
        bookingInfoBtn: 'Booking info confirm'
    };
    text: any = {};
    step: number;

    constructor(private route: ActivatedRoute,
                private router: Router) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {
        this.route.queryParamMap.subscribe((params: ParamMap) => {
           if (!params.has('step')) {
               this.router.navigate(['/']);
           } else {
               this.step = +params.get('step') as number;
           }
        });
    }

}
