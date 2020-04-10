import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NzAutocompleteModule, NzDatePickerModule, NzIconModule, NzInputModule, NzSelectModule} from 'ng-zorro-antd';

import {GoHeader} from './header/header.component';
import {GoInput} from './input/input.component';
import {GoTab} from './tab/tab.component';
import {GoPaymentTab} from './payment-tab/payment-tab.component';
import {GoSearchCard} from './search-card/search-card.component';
import {GoStayCardComponent} from './stay-card/stay-card.component';
import {GoFooterComponent} from './footer/footer.component';
import {GoHistoryCard} from './history-card/history-card.component';



@NgModule({
    declarations: [
        GoHeader,
        GoInput,
        GoTab,
        GoPaymentTab,
        GoSearchCard,
        GoStayCardComponent,
        GoFooterComponent,
        GoHistoryCard,
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule,
        NzDatePickerModule,
        NzSelectModule,
        NzAutocompleteModule,
        NzInputModule,
        NzIconModule,
    ],
    exports: [
        GoHeader,
        GoInput,
        GoTab,
        GoPaymentTab,
        GoSearchCard,
        GoStayCardComponent,
        GoFooterComponent,
        GoHistoryCard,
    ]
})
export class ComponentModule {
}
