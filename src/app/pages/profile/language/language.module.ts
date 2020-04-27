import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LanguagePageRoutingModule} from './language-routing.module';

import {LanguagePage} from './language.page';
import {NzButtonModule, NzIconModule, NzRadioModule} from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LanguagePageRoutingModule,
        NzRadioModule,
        NzButtonModule,
        NzIconModule
    ],
    declarations: [LanguagePage]
})
export class LanguagePageModule {
}
