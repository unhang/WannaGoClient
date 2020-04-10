import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

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
        ComponentModule
    ],
    declarations: [ProfileInfoPage]
})
export class ProfileInfoPageModule {
}
