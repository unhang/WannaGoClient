import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LostPwdPageRoutingModule } from './lost-pwd-routing.module';

import { LostPwdPage } from './lost-pwd.page';
import {FormLostPwdComponent} from './form-lost-pwd/form-lost-pwd.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LostPwdPageRoutingModule
  ],
  declarations: [LostPwdPage, FormLostPwdComponent]
})
export class LostPwdPageModule {}
