import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';
import {CoverComponent} from './cover/cover.component';
import {ComponentModule} from '../../../components/component.module';
import {GoService} from './go-service/go-service.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        ComponentModule
    ],
    declarations: [
        HomePage,
        CoverComponent,
        GoService
    ]
})
export class HomePageModule {
}
