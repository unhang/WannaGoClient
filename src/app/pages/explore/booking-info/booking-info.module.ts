import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {BookingInfoPageRoutingModule} from './booking-info-routing.module';

import {BookingInfoPage} from './booking-info.page';
import {LoginCardComponent} from './login-card/login-card.component';
import {ComponentModule} from '../../../components/component.module';
import {StepOneComponent} from './step-one/step-one.component';
import {StepTwoComponent} from './step-two/step-two.component';
import {PaymentCardComponent} from './payment-card/payment-card.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        BookingInfoPageRoutingModule,
        ComponentModule,
        // Stripe
    ],
    declarations: [
        BookingInfoPage,
        LoginCardComponent,
        StepOneComponent,
        StepTwoComponent,
        PaymentCardComponent
    ]
})
export class BookingInfoPageModule {
}
