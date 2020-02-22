import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingInfoPage } from './booking-info.page';

const routes: Routes = [
  {
    path: '',
    component: BookingInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingInfoPageRoutingModule {}
