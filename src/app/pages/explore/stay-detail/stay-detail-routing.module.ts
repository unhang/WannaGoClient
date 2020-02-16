import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StayDetailPage } from './stay-detail.page';

const routes: Routes = [
  {
    path: '',
    component: StayDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StayDetailPageRoutingModule {}
