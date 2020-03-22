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
        description: 'Nhập thông tin hoặc lựa chọn thẻ đã lưu để tiến hành thanh toán quốc tế qua Stripe.',
        cardError: 'Thông tin thẻ của bạn không chính xác'
    };
    textEn: any = {
        title: 'Payment by Visa, Master Card',
        description: 'Select the option to pay your service my booking',
        cardError: 'Card is invalid'
    };
    text: any = {};
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
        if (this.method) {
            this.method = 'method-' + this.method;
            this.loadStripe();
        }
    }


    async loadStripe() {
        this.stripe = new Stripe('pk_test_l3crbRAv6t4lHTQvoMDr05FU002pfY2tkb', {
            apiVersion: '2020-03-02',
        });
        this.elements = this.stripe.elements();
        this.createCard();
    }

    async createCard() {
        const style = {
            base: {
                width: '100%',
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
        this.card.mount(`#${this.method}`);
        this.card.on('change', event => {
            console.log(event);
        });
    }

    async pay(amount) {
        // TODO: thanh toan
        // gọi server để lấy client_secret;


        this.confirmPayment();
    }

    confirmPayment() {
        const secret = 'pi_1GP3zOGmBXNfqIUsMWoTfwgG_secret_VFryyzCdJcE8GrJKvZYHuYyuh';
        this.stripe.confirmCardPayment(secret, {
            payment_method: {
                card: this.card,
                billing_details: {
                    name: 'Jenny Rosen'
                }
            }
        }).then(result => {
            if (result.error) {
                console.log(result.error);
            } else {
                console.log('successsssss');
                console.log(result);
            }
        });

    }
}
