import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  // {
  //   path: 'profile-info',
  //   loadChildren: () => import('./profile-info/profile-info.module').then( m => m.ProfileInfoPageModule)
  // },

  // {
  //   path: 'booking-history',
  //   loadChildren: () => import('./booking-history/booking-history.module').then( m => m.BookingHistoryPageModule)
  // },

  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  // },
  // {
  //   path: 'lost-pwd',
  //   loadChildren: () => import('./lost-pwd/lost-pwd.module').then( m => m.LostPwdPageModule)
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
