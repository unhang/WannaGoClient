import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';

declare  var Stripe: any;
@Component({
    selector: 'app-step-two',
    templateUrl: './step-two.component.html',
    styleUrls: ['./step-two.component.scss'],
})
export class StepTwoComponent implements OnInit {
    lang = localStorage.getItem('lang');
    textVn: any = {
        step2Text: 'Thanh toán',
        step2TextDescription: 'Xác nhận phương thức thanh toán',
        optionPay: 'Vui lòng lựa chọn Phương thức thanh toán',
        bookingInfoBtn: 'Xác nhận thông tin thanh toán'
    };
    textEn: any = {
        step2Text: 'Confirm and payment',
        step2TextDescription: 'Proccess to payment',
        optionPay: 'Please! select your option payment',
        bookingInfoBtn: 'Booking info confirm'
    };
    text: any = {};

    stripe: any;
    elements: any;
    card: any;
    @ViewChild('paymentForm', null) paymentForm: Element;

    constructor(private fb: FormBuilder) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {
        this.loadStripe();
    }


    loadStripe() {
        this.stripe = new Stripe('pk_test_l3crbRAv6t4lHTQvoMDr05FU002pfY2tkb', {
            apiVersion: '2020-03-02',
        });
        this.elements = this.stripe.elements();
        this.card = this.elements.create('card', {
            classes: {
                complete: 'StripeElement--complete'
            },
            style: {
                base: {
                    iconColor: '#3385ff',
                    color: '#3c3c3c',
                    fontWeight: 500,
                    fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                    fontSize: '16px',
                    fontSmoothing: 'antialiased',
                    ':-webkit-autofill': {
                        color: '#fce883',
                    },
                    '::placeholder': {
                        color: '#17212e',
                    },
                },
                invalid: {
                    iconColor: '#ff2643',
                    color: '#ff0727',
                },
            },
            number: '4242424242424242',
            exp_month: 3,
            exp_year: 2021,
            cvc: '314',
        });
        this.card.mount('#card-element');
    }

    async pay(amount) {
        const result = await this.stripe.createToken(this.card);
        if (result.error) {
            console.log('Error creating payment method.');
            const errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {
            // At this point, you should send the token ID
            // to your server so it can attach
            // the payment source to a customer
            console.log('Token acquired!');
            console.log(result.token);
            console.log(result.token.id);
        }
    }


}
