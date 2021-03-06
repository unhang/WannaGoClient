import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NzDatePickerModule, NzInputModule} from 'ng-zorro-antd';
import {IonicModule} from '@ionic/angular';
import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';
import {CoverComponent} from './cover/cover.component';
import {ComponentModule} from '../../../components/component.module';
import {GoService} from './go-service/go-service.component';
import {GoSpecialAreaComponent} from './special-area/special-area.component';
import {GoAreaCardComponent} from './special-area/area-card/area-card.component';
import {GoSlicesTypeComponent} from './slices-type/slices-type.component';
import {GoTypeCardComponent} from './slices-type/type-card/type-card.component';
import {GoOneHundredComponent} from './one-hundred/one-hundred.component';
import {GoIntroAppComponent} from './intro-app/intro-app.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        ComponentModule,
        NzDatePickerModule,
    ],
    declarations: [
        HomePage,
        CoverComponent,
        GoService,
        GoSpecialAreaComponent,
        GoAreaCardComponent,
        GoSlicesTypeComponent,
        GoTypeCardComponent,
        GoOneHundredComponent,
        GoIntroAppComponent
    ]
})
export class HomePageModule {
}
