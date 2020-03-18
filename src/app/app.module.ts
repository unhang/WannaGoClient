import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {HostService, StayService, UserService, BookingService, } from 'src/swagger';
import {HttpClientModule} from '@angular/common/http';
import {MockDataService} from './service/mock-data.service';
import {ComponentModule} from './components/component.module';
import {AuthService} from './services/auth.service';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot({
            mode: 'ios',
            backButtonText: '',
        }),
        AppRoutingModule,
        HttpClientModule,
        ComponentModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        MockDataService,
        // swagger service
        StayService, HostService, UserService, BookingService,
        AuthService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
