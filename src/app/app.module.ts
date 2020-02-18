import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HostService, StayService} from '../swagger';
import {HttpClientModule} from '@angular/common/http';
import {MockDataService} from './service/mock-data.service';
import {ComponentModule} from './components/component.module';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot({
            mode: 'ios',
            backButtonText: '',
            backButtonIcon: 'arrow-back'
        }),
        AppRoutingModule,
        HttpClientModule,
        ComponentModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        StayService,
        MockDataService,
        HostService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
