import {Component, OnInit} from '@angular/core';
import {Booking, BookingService} from '../../../../../swagger';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-step-one',
    templateUrl: './step-one.component.html',
    styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent implements OnInit {
    lang = localStorage.getItem('lang');

    booking: Booking = {};
    bookingId = this.route.snapshot.queryParams.booking_id;
    bookingForm: FormGroup = this.fb.group({
        customerName: this.fb.control(null, Validators.required),
        totalPrice: this.fb.control(null, Validators.required),
        guestCount: this.fb.control(null, Validators.required),
        phone: this.fb.control(null, Validators.required),
        email: this.fb.control(null, [Validators.required, Validators.email]),
    });

    textVn: any = {
        step1Text: 'Thông tin đặt chỗ',
        step12Text: 'Thông tin cá nhân',
        step13Text: '2 đêm tại S. CAMELLIA 2 _ Managed by SONG CAT HOME',
        numCustomers: 'Số khách',
        customerName: 'Tên khách hàng',
        customerPhone: 'Số điện thoại',
        customerEmail: 'Email',
        startDateBookinng: 'Ngày nhận phòng',
        endDateBookinng: 'Ngày trả phòng',
        step1TextDescription: 'Kiểm tra lại thông đặt phòng của quý khách hàng',
        bookingInfoBtn: 'Xác nhận thông tin thanh toán',
        totalPrice: 'Tổng thanh toán'
    };
    textEn: any = {
        step1Text: 'Booking information',
        step12Text: 'Customer information',
        step13Text: '2 đêm tại S. CAMELLIA 2 _ Managed by SONG CAT HOME',
        numCustomers: 'Amout members',
        customerName: 'Customer name',
        customerPhone: 'Customer Phone Number',
        customerEmail: 'Email',
        startDateBookinng: 'Start day booking',
        endDateBookinng: 'End day booking',
        step1TextDescription: 'Check information of your booking',
        bookingInfoBtn: 'Booking info confirm',
        totalPrice: 'Total price'
    };
    text: any = {};

    constructor(private router: Router,
                private fb: FormBuilder,
                private route: ActivatedRoute,
                private bookingService: BookingService) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {
        console.log(this.bookingId);
        this.bookingService.getBookingById(this.bookingId)
            .subscribe((booking: Booking) => {
                this.booking = booking;
                this.updateBookingForm();
            });
    }

    updateBookingForm() {
        Object.keys(this.booking).forEach(key => {
            if (this.bookingForm.get(key)) {
                this.bookingForm.get(key).reset(this.booking[key]);
            }
        });
    }

    updateBookingThenStep2() {
        const bookingUpdate: Booking = {
            ...this.booking,
            ...this.bookingForm.value,
        };

        this.bookingService.updateBooking(bookingUpdate)
            .subscribe((booking) => {
                this.goToStep2();
            });
    }

    goToStep2() {
        this.router.navigate(
            [],
            {
                relativeTo: this.route,
                queryParams: {step: 2},
                queryParamsHandling: 'merge'
            }
        );
    }
}
