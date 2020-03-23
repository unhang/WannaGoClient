import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from 'src/app/constant/HeaderStyle';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StayService} from '../../../../swagger';

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

    constructor(private route: ActivatedRoute,
                private stayService: StayService) {
    }

    ngOnInit() { }

    ionViewDidEnter() {
        this.route.queryParamMap
            .subscribe((queryParam: ParamMap) => {
                // console.log(queryParam);
                this.getStay(queryParam);
            });
    }

    getStay(queryParam: ParamMap) {
        const cityId = +queryParam.get('city_id');
        const checkIn = queryParam.get('check_in');
        const checkOut = queryParam.get('check_out');
        const guestCount = +queryParam.get('guest_count');
        const pages = +queryParam.get('pages');
        console.log(cityId, checkIn, checkOut, guestCount, pages);
        this.stayService.search(checkIn, checkOut, cityId, guestCount, pages)
            .subscribe(res => {
                console.log(res);
            });
    }

}
