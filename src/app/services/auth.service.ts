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
    private userInfo: UserInfo = {...JSON.parse(localStorage.getItem('user'))};

    constructor(private navController: NavController,
                private router: Router) {
    }

    getUserInfo(): UserInfo {
        return {...this.userInfo};
    }

    setUserInfo(userInfo) {
        localStorage.setItem('user', JSON.stringify(userInfo));
        this.userInfo = userInfo;
    }

    getAccessToken(): string {
        return this.accessToken || '';
    }

    setAccessToken(accessToken: string) {
        this.accessToken = accessToken + '';
        console.log('AUTH ' + this.accessToken);
        localStorage.removeItem('accessToken');
        localStorage.setItem('accessToken', accessToken);
    }

    get isSignIn(): boolean {
        return this.accessToken !== '';
    }

    signOut() {
        this.accessToken = '';
        this.userInfo = {};
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        window.location.reload();
    }
}
