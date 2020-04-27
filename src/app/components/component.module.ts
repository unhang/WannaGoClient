import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    NzAutocompleteModule,
    NzButtonModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule, NzPopoverModule, NzRadioModule,
    NzSelectModule, NzSwitchModule,
    NzTypographyModule,
} from 'ng-zorro-antd';

import {GoHeader} from './header/header.component';
import {GoInput} from './input/input.component';
import {GoTab} from './tab/tab.component';
import {GoPaymentTab} from './payment-tab/payment-tab.component';
import {GoSearchCard} from './search-card/search-card.component';
import {GoStayCardComponent} from './stay-card/stay-card.component';
import {GoFooterComponent} from './footer/footer.component';
import {GoHistoryCard} from './history-card/history-card.component';
import {GoFavoriteBtn} from './favorite-btn/favorite-btn.component';
import {GoSignIn} from './sign-in/sign-in.component';



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
        GoFavoriteBtn,
        GoSignIn,
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NzDatePickerModule,
        NzSelectModule,
        NzAutocompleteModule,
        NzInputModule,
        NzIconModule,
        NzButtonModule,
        NzDropDownModule,
        NzTypographyModule,
        NzSwitchModule,
        NzPopoverModule,
        NzRadioModule
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
        GoFavoriteBtn,
        GoSignIn,
    ]
})
export class ComponentModule {
}
