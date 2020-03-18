import {Component, Input, OnChanges, OnInit} from '@angular/core';

declare var Stripe: any;

@Component({
    selector: 'app-payment-card',
    templateUrl: './payment-card.component.html',
    styleUrls: ['./payment-card.component.scss'],
})
export class PaymentCardComponent implements OnInit, OnChanges {

    lang = localStorage.getItem('lang');
    textVn: any = {
        title: 'Thanh toán bằng thẻ quốc tế Visa, Master, JCB',
        description: 'Nhập thông tin hoặc lựa chọn thẻ đã lưu để tiến hành thanh toán quốc tế qua Stripe.'
    };
    textEn: any = {
        title: 'Payment by Visa, Master Card',
        description: 'Select the option to pay your service my booking'
    };
    text: any = {};

    @Input() selected = false;
    @Input() method: string;
    stripe: any;
    elements: any;
    card: any;

    constructor() {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {

    }

    ngOnChanges(): void {
        if (this.selected && this.method) {
            this.method = 'method-' + this.method;
            this.loadStripe();
        }
    }

    async loadStripe() {
        this.stripe = new Stripe('pk_test_l3crbRAv6t4lHTQvoMDr05FU002pfY2tkb', {
            apiVersion: '2020-03-02',
        });
        this.elements = this.stripe.elements();


        const style = {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        this.card = await this.elements.create('card', {
            style,
            hidePostalCode: true,
        });
        // this.card.cardNumber = '42424242424242424242';
        // this.card.cardExpiry = '0424';
        // this.card.cardCvc = '123';
        const moutedCard = this.card.mount(`#${this.method}`);
        console.log(this.card);
        console.log(moutedCard);
        this.card.on('change', event => {
            console.log(event);
        });

        // console.log(this.card);
    }

    async pay(amount) {
        // const result = await this.stripe.createToken(this.card);
        // if (result.error) {
        //     console.log('Error creating payment method.');
        //     const errorElement = document.getElementById('card-errors');
        //     errorElement.textContent = result.error.message;
        // } else {
        //     // At this point, you should send the token ID
        //     // to your server so it can attach
        //     // the payment source to a customer
        //     console.log('Token acquired!');
        //     console.log(result.token);
        //     console.log(result.token.id);
        // }

    }
}
