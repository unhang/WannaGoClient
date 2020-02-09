import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StayDetailPageRoutingModule } from './stay-detail-routing.module';

import { StayDetailPage } from './stay-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StayDetailPageRoutingModule
  ],
  declarations: [StayDetailPage]
})
export class StayDetailPageModule {}
