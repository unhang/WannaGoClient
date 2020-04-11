import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProfileInfoPageRoutingModule} from './profile-info-routing.module';

import {ProfileInfoPage} from './profile-info.page';
import {ComponentModule} from '../../../components/component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfileInfoPageRoutingModule,
        ComponentModule,
        ReactiveFormsModule
    ],
    declarations: [ProfileInfoPage]
})
export class ProfileInfoPageModule {
}
