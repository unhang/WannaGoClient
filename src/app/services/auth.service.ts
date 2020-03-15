import {Injectable} from '@angular/core';
import {UserInfo, UserService} from '../../swagger';
import * as jwt_decode from 'jwt-decode';
import {LoadingController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private token = localStorage.getItem('token') || '';
    loading;

    constructor(private userService: UserService,
                private navController: NavController,
                private router: Router,
                private loadCtrl: LoadingController) {
    }

    getToken() {
        let token = '';
        try {
            token = jwt_decode(this.token);
        } catch (e) {
            token = '';
        }
    }


    signIn(userInfo: UserInfo) {
        this.userService.signIn(userInfo)
            .subscribe(res => {
                console.log(res);
                this.token = res['token'];
                // localStorage.setItem('token', this.token);
                this.router.navigate(['pages/tabs/explore/home']);
            });
    }

    signUp(userInfo: UserInfo) {
        this.userService.signUp(userInfo)
            .subscribe((ResUserInfo: UserInfo) => {
                this.signIn(userInfo);
            });
    }


}
