import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingHistoryPage } from './booking-history.page';

const routes: Routes = [
  {
    path: '',
    component: BookingHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingHistoryPageRoutingModule {}
