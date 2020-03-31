import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {environment} from '../environments/environment';
import {Configuration, ConfigurationParameters, UserService,} from 'src/swagger';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MockDataService} from './service/mock-data.service';
import {ComponentModule} from './components/component.module';

import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';

registerLocaleData(en);

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot({
            mode: 'ios',
            backButtonText: '',
        }),
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        ComponentModule,
        NgZorroAntdModule,
        FormsModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AuthService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: NZ_I18N, useValue: en_US},
        {
            provide: UserService,
            useFactory: (authService: AuthService, httpClient: HttpClient) => {
                const configurationParameters: ConfigurationParameters = {
                    accessToken: authService.getAccessToken(),
                    basePath: environment.basePath,
                };
                const configuration = new Configuration(configurationParameters);
                return new UserService(httpClient, environment.basePath, configuration);
            },
            deps: [AuthService, HttpClient]
        },
        MockDataService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
