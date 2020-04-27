import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {BookingHistoryPageRoutingModule} from './booking-history-routing.module';

import {BookingHistoryPage} from './booking-history.page';
import {ComponentModule} from '../../../components/component.module';
import {NzEmptyModule} from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BookingHistoryPageRoutingModule,
        ComponentModule,
        NzEmptyModule
    ],
    declarations: [BookingHistoryPage]
})
export class BookingHistoryPageModule {
}
