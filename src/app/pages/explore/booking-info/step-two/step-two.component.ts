import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Booking, BookingService, StayDetail, StayService} from '../../../../../swagger';
import {ActivatedRoute} from '@angular/router';
import {NavController, ToastController} from '@ionic/angular';


@Component({
    selector: 'app-step-two',
    templateUrl: './step-two.component.html',
    styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements AfterViewInit, OnDestroy {
    lang = localStorage.getItem('lang');
    textVn: any = {
        step2Text: 'Thanh toán',
        step2TextDescription: 'Xác nhận phương thức thanh toán',
        optionPay: 'Vui lòng lựa chọn Phương thức thanh toán',
        bookingInfoBtn: 'Xác nhận thông tin thanh toán',
        title: 'Thẻ Visa, Master, JCB',
        description: 'Nhập thông tin hoặc lựa chọn thẻ đã lưu để tiến hành thanh toán quốc tế qua Stripe.',
        toast: {
            header: 'Thanh toán thành công',
            message: 'Tự động chuyển trang',
            btn: 'Điều hướng ngay'
        }
    };
    textEn: any = {
        step2Text: 'Confirm and payment',
        step2TextDescription: 'Proccess to payment',
        optionPay: 'Please! select your option payment',
        bookingInfoBtn: 'Booking info confirm',
        title: 'Visa, Master Card',
        description: 'Select the option to pay your service my booking',
        toast: {
            header: 'Payment succeeded',
            message: 'Automatically redirecting...',
            btn: 'Redirect now'
        }
    };
    text: any = {};

    bookingId: number;
    booking: Booking;
    stayDetail: StayDetail;

    interval: any;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private toastCtrl: ToastController,
                private stayService: StayService,
                private navCtrl: NavController,
                private bookingService: BookingService) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
        this.bookingId = +this.route.snapshot.queryParams['booking_id'];
    }

    ngAfterViewInit(): void {
        if (!this.bookingId) {
            return;
        }
        this.getBooking();
    }

    getBooking() {
        this.bookingService.getBookingById(this.bookingId)
            .subscribe((booking: Booking) => {
                this.booking = booking;
                this.getStayDetail(this.booking.stayId);
            });
    }

    getStayDetail(stayId: number) {
        this.stayService.getStayDetail(stayId)
            .subscribe((stayDetail: StayDetail) => {
                this.stayDetail = stayDetail;
            });
    }

    async paymentSucceeded() {
        const toastEl = await this.toastCtrl.create({
            // header: this.text.toast.header,
            message: this.text.toast.message,
            position: 'top',
            color: 'dark',
            buttons: [
                {
                    text: this.text.toast.btn,
                    role: 'redirect',
                    icon: 'star',
                    handler: () => {
                        this.navigateNow();
                    },
                }
            ]
        });
        await toastEl.present();
        this.interval = setInterval(() => {
            toastEl.dismiss();
            this.navigateNow();
        }, 4000);
    }

    private navigateNow() {
        this.navCtrl.navigateRoot('/pages/tabs/explore/home')
            .then(() => {
                this.navCtrl.navigateRoot('/pages/tabs/profile/booking-history');
            });
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    ionViewDidLeave() {
        clearInterval(this.interval);
    }
}
