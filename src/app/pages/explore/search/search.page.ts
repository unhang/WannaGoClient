import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from 'src/app/constant/HeaderStyle';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StaySearch, StayService} from '../../../../swagger';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    headerStyle = HeaderStyle;

    cityId: number;
    checkIn: string;
    checkOut: string;
    guestCount: number;
    page: number;
    stays: StaySearch;
    totals: number;
    pageView = 1;
    constructor(private route: ActivatedRoute,
                private stayService: StayService) {
    }

    ngOnInit() { }

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
                console.log(this.totals);
            });
    }

    getPanigation(numPage) {
        this.pageView = numPage;
        this.stayService.search(this.checkIn, this.checkOut, this.cityId, this.guestCount, this.pageView)
            .subscribe((result: StaySearch) => {
                this.stays = result;
            });
    }
}
