import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LostPwdPage } from './lost-pwd.page';

const routes: Routes = [
  {
    path: '',
    component: LostPwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LostPwdPageRoutingModule {}
