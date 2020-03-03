import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesPage} from './pages.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: PagesPage,
        children: [
            {
                path: 'explore',
                children: [
                    {
                        path: 'home',
                        loadChildren: () => import('./explore/home/home.module').then(m => m.HomePageModule),
                        data: {activatedTab: 1}
                    },
                    {
                        path: 'faqs',
                        loadChildren: () => import('./explore/faqs/faqs.module').then(m => m.FaqsPageModule),
                        data: {activatedTab: 1}
                    },
                    {
                        path: 'search',
                        loadChildren: () => import('./explore/search/search.module').then(m => m.SearchPageModule),
                        data: {activatedTab: 1}
                    },
                    {
                        path: ':id/stay',
                        loadChildren: () => import('./explore/stay-detail/stay-detail.module').then(m => m.StayDetailPageModule),
                        data: {activatedTab: 1}
                    },
                    {
                        path: ':id/checkout',
                        loadChildren: () => import('./explore/checkout/checkout.module').then(m => m.CheckoutPageModule),
                        data: {activatedTab: 1}
                    },
                    {
                        path: 'booking-info',
                        loadChildren: () => import('./explore/booking-info/booking-info.module').then(m => m.BookingInfoPageModule)
                    },
                    {
                        path: '',
                        redirectTo: 'home',
                        pathMatch: 'full'
                    },
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
                    },
                    {
                        path: 'login',
                        loadChildren: () => import('./profile/login/login.module').then(m => m.LoginPageModule)
                    },
                    {
                        path: 'register',
                        loadChildren: () => import('./profile/register/register.module').then(m => m.RegisterPageModule)
                    },
                    {
                        path: 'lost-pwd',
                        loadChildren: () => import('./profile/lost-pwd/lost-pwd.module').then(m => m.LostPwdPageModule)
                    },
                    {
                        path: 'booking-history',
                        loadChildren: () => import('./profile/booking-history/booking-history.module').then(m => m.BookingHistoryPageModule)
                    },
                    {
                        path: 'profile-info',
                        loadChildren: () => import('./profile/profile-info/profile-info.module').then(m => m.ProfileInfoPageModule)
                    },
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/pages/tabs/explore/home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesPageRoutingModule {
}
