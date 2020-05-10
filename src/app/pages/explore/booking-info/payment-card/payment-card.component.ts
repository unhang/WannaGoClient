import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Booking, BookingService, PaymentIntent, StripeService} from '../../../../../swagger';
import {SpinnerOptService} from '../../../../services/spinner-opt.service';
import {AlertController, LoadingController, NavController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

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
        cardError: 'Thông tin thẻ của bạn không chính xác',
        alText: 'Đã phát sinh lỗi, xin thử lại sau',
        alHeader: 'cảnh báo'
    };
    textEn: any = {
        title: 'Payment by Visa, Master Card',
        description: 'Select the option to pay your service my booking',
        cardError: 'Card is invalid',
        alText: 'Error! Please try again',
        alHeader: 'warn'
    };
    text: any = {};

    loadEl: any;

    @Input() booking: Booking;
    @Output() paymentDone = new EventEmitter();

    stripe: any;
    elements: any;
    card: any;
    paymentIntent: PaymentIntent;

    PAYMENT_CARD = 'go-stipe-payment-card';
    INCOMPLETE = 'incomplete';
    PENDING = 'pending';


    constructor(private stripeService: StripeService,
                private bookingService: BookingService,
                private alertCtrl: AlertController,
                private router: Router,
                private navCtrl: NavController,
                private loadCtrl: LoadingController,
                private toastCtrl: ToastController,
                private spinnerOptService: SpinnerOptService) {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {
    }

    ngOnChanges(): void {
        this.createLoadEl();
        this.loadStripe();
    }

    async createLoadEl() {
        if (this.loadEl) {
            return;
        }
        this.loadEl = await this.loadCtrl.create(this.spinnerOptService.createOpts());
    }

    async loadStripe() {
        this.stripe = new Stripe('pk_test_l3crbRAv6t4lHTQvoMDr05FU002pfY2tkb');
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
        this.card.mount(`#${this.PAYMENT_CARD}`);
    }

    async pay() {
        this.loadEl.present();
        if (!this.booking) {
            this.loadEl.dismiss();
            return;
        }
        this.stripeService.paymentIntent({...this.booking})
            .subscribe(
                (paymentIntent: PaymentIntent) => {
                    this.paymentIntent = paymentIntent;
                    if ((paymentIntent.status === this.INCOMPLETE || paymentIntent.status === this.PENDING)
                        && paymentIntent.clientSecret) {
                        this.confirmPayment(this.paymentIntent.clientSecret);
                    }
                },
                (err) => {
                    this.loadEl.dismiss();
                    this.errorAlert();
                }
            )
        ;
    }

    private async errorAlert() {

        const alert = await this.alertCtrl.create({
            mode: 'md',
            header: this.text.alHeader,
            message: this.text.alText,
            buttons: [
                {text: 'Ok'}
            ]
        });
        await alert.present();
    }

    async confirmPayment(clientSecret: string) {
        const payment = await this.stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: this.card,
                billing_details: {}
            }
        });

        if (payment.error) {
            this.loadEl.dismiss();
            this.errorAlert();
        } else {
            this.loadEl.dismiss();
            this.paymentIntent.status = payment.paymentIntent.status;

            this.stripeService.confirmPayment({...this.paymentIntent})
                .subscribe((paymentIntent) => {
                    this.paymentDone.emit();
                });
        }
    }

}
