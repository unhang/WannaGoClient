import {Injectable} from '@angular/core';
import {AccessToken, SignIn, UserInfo, UserService} from '../../swagger';
import * as jwt_decode from 'jwt-decode';
import {LoadingController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private accessToken: string = localStorage.getItem('accessToken') || '';
    private userInfo: UserInfo;

    constructor(private navController: NavController,
                private router: Router) {
    }



    getUserInfo(): UserInfo {
        return {...this.userInfo};
    }

    setUserInfo(userInfo) {
        this.userInfo = userInfo;
    }

    getAccessToken() {
        return this.accessToken || '';
    }
    setAccessToken(accessToken: string) {
        this.accessToken = accessToken;
        console.log('Setter: ' + this.accessToken);
        localStorage.setItem('accessToken', accessToken);
    }

    get isSignIn(): boolean {
        return this.accessToken !== '';
    }

}
