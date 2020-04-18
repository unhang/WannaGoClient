import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../constant/HeaderStyle';
import {AuthService} from '../../services/auth.service';
import {StayService, UserInfo, StayFavorite} from '../../../swagger';
import { ModalController } from '@ionic/angular';
import { GoSignIn } from '../../components/sign-in/sign-in.component';
@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.page.html',
    styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
    lang = localStorage.getItem('lang');
    textEn: any = {
        title: 'Saved',
        subTitle: 'List of your favorite stays',
        noFavorite: 'You dont any stays yet',
        suggestBtn: 'Click here to favorite',
        loginBtn: 'Login',
        noLogin: 'Please, you need login to see your favorites!'
    };
    textVn: any = {
        title: 'Đã lưu',
        subTitle: 'Danh sách yêu thích của bạn',
        noFavorite: 'Bạn chưa yêu thích địa điểm nào',
        suggestBtn: 'Bấm vào đây để tìm phòng yêu thích',
        loginBtn: 'Đăng nhập',
        noLogin: 'Đăng nhập để xem các địa điểm yêu thích của bạn nhé!'
    };
    headerStyle = HeaderStyle;

    text: any = this.lang === 'en' ? this.textEn : this.textVn;

    listFavorite: StayFavorite[] = [];
    isLogin: boolean = false;

    constructor(private stayService: StayService,
                private authService: AuthService,
                public modalController: ModalController) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        if (this.authService.isAuthenticated === true) {
            this.isLogin = true;
            this.getFavorite();
        }
    }

    getFavorite() {
        const userInfo: UserInfo = this.authService.getUserInfo();

        this.stayService.getFavorite(userInfo.userId)
            .subscribe((listFavorite: StayFavorite[]) => {
                this.listFavorite = listFavorite;
            });
    }

    // Start Xử lí chưa đăng nhập
    async presentModal() {
        const modal = await this.modalController.create({
            component: GoSignIn  // Modal cần show
        });
        return await modal.present();
    }
    // End Xử lí chưa đăng nhập
}
