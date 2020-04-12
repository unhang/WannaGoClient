import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HeaderStyle} from '../../../constant/HeaderStyle';
import {NavController} from '@ionic/angular';

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
        bookingInfoBtn: 'Xác nhận thông tin thanh toán',
        title: 'Thanh toán bằng thẻ quốc tế Visa, Master, JCB',
        description: 'Nhập thông tin hoặc lựa chọn thẻ đã lưu để tiến hành thanh toán quốc tế qua Stripe.'
    };
    textEn: any = {
        step1Text: 'Booking information',
        step2Text: 'Confirm and payment',
        bookingInfoBtn: 'Booking info confirm'
    };
    text: any = {};
    step: number;
    headerStyle: any = HeaderStyle;

    isMobile = window.innerWidth < 767;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private navCtrl: NavController) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    resetNavRoot() {
        this.navCtrl.navigateRoot('/pages/tabs/explore/home');
    }


    ngOnInit() {
        this.route.queryParamMap.subscribe((params: ParamMap) => {
            if (!params.has('step') || !params.has('booking_id')) {
                this.router.navigate(['/']);
            } else {
                this.step = +params.get('step') as number;
            }
        });
    }

}
