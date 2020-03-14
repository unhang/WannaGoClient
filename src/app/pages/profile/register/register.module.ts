import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RegisterPageRoutingModule} from './register-routing.module';

import {RegisterPage} from './register.page';
import {FormRegisterComponent} from './form-register/form-register.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RegisterPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [RegisterPage, FormRegisterComponent]
})
export class RegisterPageModule {
}
