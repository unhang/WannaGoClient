import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'explore', pathMatch: 'full' },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/explore/home/home.module').then(m => m.HomePageModule),
  //   data: {
  //     activatedTab: 1
  //   }
  // },
  {
    path: 'faqs',
    loadChildren: () => import('./pages/explore/faqs/faqs.module').then( m => m.FaqsPageModule),
    data: {
      activatedTab: 1
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/profile/login/login.module').then( m => m.LoginPageModule),
    data: {
      activatedTab: 4
    }
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/profile/register/register.module').then( m => m.RegisterPageModule),
    data: {
      activatedTab: 4
    }
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    data: {
      activatedTab: 4
    }
  },
  {
    path: 'stay-detail',
    loadChildren: () => import('./pages/explore/stay-detail/stay-detail.module').then(m => m.StayDetailPageModule),
    data: {
      activatedTab: 1
    }
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/explore/explore.module').then( m => m.ExplorePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
