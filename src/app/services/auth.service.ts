import {Injectable} from '@angular/core';
import {UserInfo} from '../../swagger';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private accessToken: string = localStorage.getItem('accessToken') || '';
    private userInfo: UserInfo = {...JSON.parse(localStorage.getItem('user'))};
    isAuthenticated: boolean;

    constructor(private navController: NavController,
                private router: Router) {
        this.isAuthenticated = this.accessToken ? true : false;
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
        this.isAuthenticated = true;
        localStorage.removeItem('accessToken');
        localStorage.setItem('accessToken', accessToken);
    }

    get isSignIn(): boolean {
        return this.accessToken !== '';
    }

    signOut() {
        this.accessToken = '';
        this.userInfo = {};
        this.isAuthenticated = false;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        window.location.reload();
    }
}
