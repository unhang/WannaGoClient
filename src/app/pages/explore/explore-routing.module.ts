import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
        data: {activatedTab: 1}
    },
    {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule),
        data: {activatedTab: 1}
    },
    {
        path: ':id/stay',
        loadChildren: () => import('./stay-detail/stay-detail.module').then(m => m.StayDetailPageModule),
        data: {activatedTab: 1}
    },
    {
        path: ':id/checkout',
        loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutPageModule),
        data: {activatedTab: 1}
    },

    {
        path: 'booking-info',
        loadChildren: () => import('./booking-info/booking-info.module').then(m => m.BookingInfoPageModule)
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExplorePageRoutingModule {
}
