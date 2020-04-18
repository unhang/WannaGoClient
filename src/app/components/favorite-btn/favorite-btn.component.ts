import {Component, Input, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {AuthService} from '../../services/auth.service';
import {StayService, UserInfo, StayFavorite} from '../../../swagger';
import {Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
@Component({
    selector: 'go-favorite-btn',
    templateUrl: './favorite-btn.component.html',
    styleUrls: ['./favorite-btn.component.scss'],
})
export class GoFavoriteBtn implements OnInit {
    @Input() stayId: number;
    @Input() favorites: any;

    isFavorite: boolean;
    favoriteId: number;
    keyFavorite: number;
    lang = localStorage.getItem('lang');
    textEn: any = {
        alertHeader: 'Alert',
        alertMessage: 'Are you sure to remove favorite?',
        alertMessageAdd: 'Please login to favorite this stay!',
        alertCancelBtn: 'Cancel',
        alertLogin: 'Login',
    };
    textVn: any = {
        alertHeader: 'Thông báo',
        alertMessage: 'Bạn xác nhận hủy yêu thích?',
        alertMessageAdd: 'Xin mời đăng nhập để sử dụng chức năng',
        alertCancelBtn: 'Thoát',
        alertLogin: 'Đăng nhập'
    };
    txt = this.lang === 'en' ? this.textEn : this.textVn;

    // TODO: Inject StayService vào Param của constructor
    constructor(private router: Router,
                private stayService: StayService,
                private alertCtrl: AlertController,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.checkFavorite();
    }

    checkFavorite() {
        if (this.favorites.find(el => el.stayId === this.stayId)) {
            this.isFavorite = true;
        } else {
            this.isFavorite = false;
        }
    }

    toggleFav() {
        if (this.isFavorite) {
            this.removeFav();
        } else {
            this.addFav();
        }
    }

    async checkLogin() {
        const alert = await this.alertCtrl.create({
            header: this.txt.alertHeader,
            message: this.txt.alertMessageAdd,
            mode: 'md',
            buttons: [
                {
                    text: this.txt.alertLogin,
                    role: 'login',
                    handler: () => {
                        this.router.navigate(['/pages', 'tabs', 'profile', 'login'], {
                            queryParams: {
                                returnUrl: this.router.url || '/'
                            },
                        });
                    }
                },
                {
                    text: this.txt.alertCancelBtn,
                    role: 'cancel',
                    handler: () => {
                    }
                },
            ]
        });
        await alert.present();
    }

    async removeFav() {
        // TODO: thực các thao tác trong comment sau
        /**
         *
         * mở alert 2 button: 'OK' và 'Thoát',
         * tham khảo behavior của button 'Hủy đặt phòng' của component:  /components/history-card.component.ts,
         * nếu user chọn OK, gọi API remove favorite, sau khi remove, update this.isFavorite = false;
         */
        if (this.authService.isAuthenticated === false) {
            this.checkLogin();
        } else {
            this.successRemove()
        }
    }

    async successRemove() {
        const alert = await this.alertCtrl.create({
            header: this.txt.alertHeader,
            message: this.txt.alertMessage,
            mode: 'md',
            buttons: [
                {
                    text: 'OK',
                    role: 'OK',
                    handler: () => this.removeFavorite()
                },
                {
                    text: this.txt.alertCancelBtn,
                    role: 'cancel',
                    handler: () => {
                    }
                },
            ]
        });
        await alert.present();
    }

    private removeFavorite() {
        const userInfo: UserInfo = this.authService.getUserInfo();

        this.stayService.getFavorite(userInfo.userId)
            .subscribe(res => {
                this.keyFavorite = res.findIndex(data => data.stayId === this.stayId);
                this.favoriteId = res[this.keyFavorite].favoriteId;
                this.stayService.removeFavorite(this.favoriteId)
                    .subscribe(() => {
                        this.isFavorite = false;
                    });
            });
    }

    async addFav() {
        // TODO: thực hiện các thao tác trong commnet sau
        /**
         * gọi API add favorite
         * sau khi remove, update this.isFavorite = true;
         */
        if (this.authService.isAuthenticated === false) {
            this.checkLogin();
        } else {
            this.addFavorite()
        }
    }

    private addFavorite() {
        const userInfo: UserInfo = this.authService.getUserInfo();
        const stayFavovirePost: StayFavorite = {
            userId: userInfo.userId,
            stayId: this.stayId,
        };

        this.stayService.addFavorite(stayFavovirePost)
            .subscribe(res => {
                this.isFavorite = true;
            });
    }
}

