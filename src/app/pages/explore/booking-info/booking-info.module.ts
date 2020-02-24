import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {BookingInfoPageRoutingModule} from './booking-info-routing.module';

import {BookingInfoPage} from './booking-info.page';
import {LoginCardComponent} from './login-card/login-card.component';
import {ComponentModule} from '../../../components/component.module';
import {StepOneComponent} from './step-one/step-one.component';
import {StepTwoComponent} from './step-two/step-two.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BookingInfoPageRoutingModule,
        ComponentModule
    ],
    declarations: [
        BookingInfoPage,
        LoginCardComponent,
        StepOneComponent,
        StepTwoComponent
    ]
})
export class BookingInfoPageModule {
}
