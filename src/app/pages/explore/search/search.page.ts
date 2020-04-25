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
    favorites: any;

    /*
    * param for SearchParamComponent*/
    searchParamCheckIn: Date;
    searchParamCheckOut: Date;

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
                this.setQuery(queryParam);
                this.getStay();
            });
    }

    setQuery(queryParam: ParamMap) {
        this.cityId = +queryParam.get('city_id');
        this.checkIn = queryParam.get('check_in');
        this.checkOut = queryParam.get('check_out');
        this.guestCount = +queryParam.get('guest_count');
        this.page = +queryParam.get('page');
        this.setParamForSearchParamComponent();
    }

    setParamForSearchParamComponent() {
        const checkInArr = this.checkIn.split('-');
        let tmp = checkInArr[0];
        checkInArr[0] = checkInArr[1];
        checkInArr[1] = tmp;
        const checkIn = checkInArr.join('-');

        const checkOutArr = this.checkOut.split('-');
        tmp = checkOutArr[0];
        checkOutArr[0] = checkOutArr[1];
        checkOutArr[1] = tmp;
        const checkOut = checkOutArr.join('-');

        // const checkIn = this.searchParamCheckIn
        this.searchParamCheckIn = new Date(checkIn);
        this.searchParamCheckOut = new Date(checkOut);
    }

    getStay() {
        this.stayService.search(this.checkIn, this.checkOut, this.cityId, this.guestCount, this.page)
            .subscribe((result: StaySearch) => {
                this.stays = result;
                this.totals = result.totalCount;
                this.onLoading = false;
            });
    }

    async getPanigation(numPage) {
        this.onLoading = true;
        await this.searchContent.scrollToTop(500);
        this.page = numPage;
        this.router.navigate(['/pages', 'tabs', 'explore', 'search'],
            {
                relativeTo: this.route,
                queryParams: {page: this.page},
                queryParamsHandling: 'merge'
            }
        );
        this.getStay();
    }

    getFavorite() {
        if (this.authService.isAuthenticated === true) {
            const userInfo: UserInfo = this.authService.getUserInfo();
            this.stayService.getFavorite(userInfo.userId)
                .subscribe(res => this.favorites = res);
        }
    }
}
