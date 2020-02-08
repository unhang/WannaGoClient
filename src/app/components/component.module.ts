import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {GoHeader} from './header/header.component';
import {GoInput} from './input/input.component';


@NgModule({
    declarations: [
        GoHeader,
        GoInput,
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ],
    exports: [
        GoHeader,
        GoInput
    ]
})
export class ComponentModule {
}
