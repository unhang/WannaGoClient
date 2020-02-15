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
  // {
  //   path: 'search',
  //   loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule),
  //   data: {
  //     activatedTab: 1
  //   }
  // },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    data: {
      activatedTab: 4
    }
  },
  {
    path: 'stay-detail',
    loadChildren: () => import('./pages/stay-detail/stay-detail.module').then( m => m.StayDetailPageModule),
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
