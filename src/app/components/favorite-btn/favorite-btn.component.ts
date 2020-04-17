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

    isFavorite: boolean;
    favoriteId: number;
    keyFavorite: number;
    lang = localStorage.getItem('lang');
    textEn: any = {
        guestCount: 'Guests',
        price: 'Price',
        subPrice: '/night',
        city: 'City',
        actionBtn1: 'Payment',
        actionBtn2: 'Cancel this booking',
        alertHeader: 'Alert',
        alertMessageRemove: 'Are you sure to remove favorite?',
        alertCancelBtn: 'Cancel'
    };
    textVn: any = {
        guestCount: 'Số khách',
        price: 'Giá',
        subPrice: '/đêm',
        city: 'Địa điểm',
        actionBtn1: 'Thanh toán',
        actionBtn2: 'Xóa đặt phòng',
        alertHeader: 'Thông báo',
        alertMessageRemove: 'Bạn xác nhận hủy yêu thích?',
        alertCancelBtn: 'Thoát'
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
        if (this.authService.isAuthenticated === false) {
            this.router.navigate(['/pages', 'tabs', 'profile', 'login'], {
                queryParams: {
                    returnUrl: this.router.url || '/'
                },
            });
        }

        const userInfo: UserInfo = this.authService.getUserInfo();

        this.stayService.getFavorite(userInfo.userId)
            .subscribe(res => {
                if (res.find(el => el.stayId === this.stayId)) {
                    this.isFavorite = true;
                } else {
                    this.isFavorite = false;
                }
            });
    }

    toggleFav() {
        if (this.isFavorite) {
            this.removeFav();
        } else {
            this.addFav();
        }
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
            this.router.navigate(['/pages', 'tabs', 'profile', 'login'], {
                queryParams: {
                    returnUrl: this.router.url || '/'
                },
            });
        }

        const alert = await this.alertCtrl.create({
            header: this.txt.alertHeader,
            message: this.txt.alertMessage,
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
            this.router.navigate(['/pages', 'tabs', 'profile', 'login'], {
                queryParams: {
                    returnUrl: this.router.url || '/'
                },
            });
        }

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

