import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {SearchPageRoutingModule} from './search-routing.module';
import {ComponentModule} from 'src/app/components/component.module';

import {SearchPage} from './search.page';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchCardComponent} from './search-result/search-card/search-card.component';
import {
    NzButtonModule,
    NzCarouselModule,
    NzDatePickerModule,
    NzIconModule,
    NzInputModule,
    NzPaginationModule,
    NzRateModule
} from 'ng-zorro-antd';
import {SearchParamComponent} from './search-param/search-param.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchPageRoutingModule,
        ComponentModule,
        NzPaginationModule,
        NzRateModule,
        NzCarouselModule,
        NzInputModule,
        NzDatePickerModule,
        NzIconModule,
        NzButtonModule
    ],
    declarations: [
        SearchPage,
        SearchResultComponent,
        SearchCardComponent,
        SearchParamComponent
    ]
})
export class SearchPageModule {
}
