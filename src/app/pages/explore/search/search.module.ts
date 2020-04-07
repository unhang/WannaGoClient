import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {SearchPageRoutingModule} from './search-routing.module';
import {ComponentModule} from 'src/app/components/component.module';

import {SearchPage} from './search.page';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchCardComponent} from './search-result/search-card/search-card.component';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchPageRoutingModule,
        ComponentModule,
        NgZorroAntdModule
    ],
    declarations: [
        SearchPage,
        SearchResultComponent,
        SearchCardComponent
    ]
})
export class SearchPageModule {
}
