import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Booking, BookingService, StayDetail, StayService} from '../../../swagger';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'go-history-card',
    templateUrl: './history-card.component.html',
    styleUrls: ['./history-card.component.scss'],
})
export class GoHistoryCard implements OnInit, OnChanges {

    @Input() booking: Booking;
    @Input() actionBtnON: boolean;
    stay: StayDetail;
    deleted = false;

    lang = localStorage.getItem('lang');
    textEn: any = {
        guestCount: 'Guests',
        price: 'Price',
        subPrice: '/night',
        city: 'City',
        actionBtn1: 'Payment',
        actionBtn2: 'Cancel this booking',
        alertHeader: 'Alert',
        alertMessage: 'Are you sure to cancel this booking',
        alertCancelBtn: 'Cancel'
    };
    textVn: any = {
        guestCount: 'Số khách',
        price: 'Giá',
        subPrice: '/đêm',
        city: 'Địa điểm',
        actionBtn1: 'Thanh toán',
        actionBtn2: 'Xóa đặt phòng',
        alertHeader: 'Cảnh báo',
        alertMessage: 'Bạn xác nhận xóa đặt phòng này?',
        alertCancelBtn: 'Thoát'
    };
    txt = this.lang === 'en' ? this.textEn : this.textVn;

    constructor(private stayService: StayService,
                private bookingService: BookingService,
                private alertCtrl: AlertController) {
    }

    ngOnInit() {
    }

    ngOnChanges(): void {
        if (!this.booking) {
            return;
        }
        this.stayService.getStayDetail(this.booking.stayId)
            .subscribe((stay: StayDetail) => this.stay = stay);
    }


    async cancelBooking() {
        const alert = await this.alertCtrl.create({
            header: this.txt.alertHeader,
            message: this.txt.alertMessage,
            buttons: [
                {
                    text: 'OK',
                    role: 'OK',
                    handler: () => this.confirmedCancelBooking()
                },
                {
                    text: this.txt.alertCancelBtn,
                    role: 'OK',
                    handler: () => {
                    }
                },
            ]
        });
        await alert.present();
    }

    private confirmedCancelBooking() {
        this.bookingService.cancelBookingById(this.booking.bookingId)
            .subscribe(res => {
                this.deleted = true;
            });
    }
}
