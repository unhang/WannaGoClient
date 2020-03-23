import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NzDatePickerModule, NzSelectModule} from 'ng-zorro-antd';

import {GoHeader} from './header/header.component';
import {GoInput} from './input/input.component';
import {GoTab} from './tab/tab.component';
import {GoPaymentTab} from './payment-tab/payment-tab.component';
import {GoSearchCard} from './search-card/search-card.component';
import {GoStayCardComponent} from './stay-card/stay-card.component';
import {GoFooterComponent} from './footer/footer.component';



@NgModule({
    declarations: [
        GoHeader,
        GoInput,
        GoTab,
        GoPaymentTab,
        GoSearchCard,
        GoStayCardComponent,
        GoFooterComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule,
        NzDatePickerModule,
        NzSelectModule,
    ],
    exports: [
        GoHeader,
        GoInput,
        GoTab,
        GoPaymentTab,
        GoSearchCard,
        GoStayCardComponent,
        GoFooterComponent
    ]
})
export class ComponentModule {
}
