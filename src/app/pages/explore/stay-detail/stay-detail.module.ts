import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {StayDetailPageRoutingModule} from './stay-detail-routing.module';

import {StayDetailPage} from './stay-detail.page';
import {ComponentModule} from '../../../components/component.module';
import {GalleryCoverComponent} from './gallery-cover/gallery-cover.component';
import {HostCardComponent} from './host-card/host-card.component';
import {DescriptionComponent} from './description/description.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StayDetailPageRoutingModule,
        ComponentModule,
    ],
    declarations: [
        StayDetailPage,
        GalleryCoverComponent,
        HostCardComponent,
        DescriptionComponent,
    ]
})
export class StayDetailPageModule {
}
