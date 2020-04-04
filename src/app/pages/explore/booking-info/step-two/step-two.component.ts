import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Booking, BookingService, StayDetail, StayService} from '../../../../../swagger';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-step-two',
    templateUrl: './step-two.component.html',
    styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit, AfterViewInit {
    lang = localStorage.getItem('lang');
    textVn: any = {
        step2Text: 'Thanh toán',
        step2TextDescription: 'Xác nhận phương thức thanh toán',
        optionPay: 'Vui lòng lựa chọn Phương thức thanh toán',
        bookingInfoBtn: 'Xác nhận thông tin thanh toán',
        title: 'Thẻ Visa, Master, JCB',
        description: 'Nhập thông tin hoặc lựa chọn thẻ đã lưu để tiến hành thanh toán quốc tế qua Stripe.'
    };
    textEn: any = {
        step2Text: 'Confirm and payment',
        step2TextDescription: 'Proccess to payment',
        optionPay: 'Please! select your option payment',
        bookingInfoBtn: 'Booking info confirm',
        title: 'Visa, Master Card',
        description: 'Select the option to pay your service my booking'
    };
    text: any = {};

    bookingId: number;
    booking: Booking;
    stayDetail: StayDetail;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private stayService: StayService,
                private bookingService: BookingService) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
        this.bookingId = +this.route.snapshot.queryParams['booking_id'];
    }

    ngOnInit() {
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
                console.log(this.booking);
                this.getStayDetail(this.booking.stayId);
            });
    }

    getStayDetail(stayId: number) {
        this.stayService.getStayDetail(stayId)
            .subscribe((stayDetail: StayDetail) => {
                this.stayDetail = stayDetail;
                console.log(this.stayDetail.imgUrls);
            });
    }
}
