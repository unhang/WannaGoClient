import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ChangePasswordPageRoutingModule} from './change-password-routing.module';
// @ts-ignore
import {NzButtonModule, NzIconModule, NzInputModule} from 'ng-zorro-antd';

import {ChangePasswordPage} from './change-password.page';
import {ConfirmFormComponent} from './confirm-form/confirm-form.component';
import {ResetFormComponent} from './reset-form/reset-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        ChangePasswordPageRoutingModule,
        NzButtonModule,
        NzInputModule,
        NzIconModule
    ],
    declarations: [ChangePasswordPage, ConfirmFormComponent, ResetFormComponent]
})
export class ChangePasswordPageModule {
}
