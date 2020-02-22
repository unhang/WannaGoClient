import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LostPwdPageRoutingModule } from './lost-pwd-routing.module';

import { LostPwdPage } from './lost-pwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LostPwdPageRoutingModule
  ],
  declarations: [LostPwdPage]
})
export class LostPwdPageModule {}
