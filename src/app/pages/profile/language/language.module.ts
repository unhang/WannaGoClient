import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LanguagePageRoutingModule} from './language-routing.module';

import {LanguagePage} from './language.page';
import {NzRadioModule} from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LanguagePageRoutingModule,
        NzRadioModule
    ],
    declarations: [LanguagePage]
})
export class LanguagePageModule {
}
