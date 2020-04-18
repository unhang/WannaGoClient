import {Component, OnInit, ViewChild} from '@angular/core';
import {HeaderStyle} from 'src/app/constant/HeaderStyle';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {StaySearch, StayService, UserInfo} from '../../../../swagger';
import {IonContent} from '@ionic/angular';
import {AuthService} from '../../../services/auth.service';
@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    @ViewChild('searchContent') searchContent: IonContent;

    headerStyle = HeaderStyle;
    isMobile = window.innerWidth < 767;
    backBtnUrl = '/pages/tabs/explore/home';
    onLoading = true;

    cityId: number;
    checkIn: string;
    checkOut: string;
    guestCount: number;
    page: number;
    stays: StaySearch;
    totals: number;
    pageView = 1;
    favorites: any;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private stayService: StayService,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.getFavorite();
    }

    ionViewDidEnter() {
        this.route.queryParamMap
            .subscribe((queryParam: ParamMap) => {
                this.getStay(queryParam);
            });
    }

    getStay(queryParam: ParamMap) {
        this.cityId = +queryParam.get('city_id');
        this.checkIn = queryParam.get('check_in');
        this.checkOut = queryParam.get('check_out');
        this.guestCount = +queryParam.get('guest_count');
        this.stayService.search(this.checkIn, this.checkOut, this.cityId, this.guestCount, this.pageView)
            .subscribe((result: StaySearch) => {
                this.stays = result;
                this.totals = result.totalCount;
                this.onLoading = false;
            });
    }

    async getPanigation(numPage) {
        this.onLoading = true;
        await this.searchContent.scrollToTop(500);
        this.pageView = numPage;
        this.stayService.search(this.checkIn, this.checkOut, this.cityId, this.guestCount, this.pageView)
            .subscribe((result: StaySearch) => {
                this.stays = result;
                this.onLoading = false;
            });
    }

    getFavorite() {
        if (this.authService.isAuthenticated === true) {
            const userInfo: UserInfo = this.authService.getUserInfo();

            this.stayService.getFavorite(userInfo.userId)
                .subscribe(res => {
                    this.favorites = res;
                    console.log(this.favorites);
                });
        }
    }
}
