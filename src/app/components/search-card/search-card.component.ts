import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as cities from './cities.data';

@Component({
    selector: 'go-search-card',
    templateUrl: './search-card.component.html',
    styleUrls: ['./search-card.component.scss'],
})
export class GoSearchCard implements OnInit {
    lang = localStorage.getItem('lang');
    textVn: any = {
        title: 'NHẬN PHÒNG NGAY VỚI WANNAGO !!!',
        address: 'Địa điểm',
        addressPlaceholder: 'Nhập địa điểm bạn muốn đến',
        date: 'Ngày đặt',
        people: 'Số người',
        money: 'Mức giá',
        checkIn: 'Ngày đến',
        checkOut: 'Ngày đi',
        searchBtn: 'TÌM KIẾM'
    };
    textEn: any = {
        title: 'GET YOUR ROOM RIGHT NOW WITH WANNGO !!!',
        address: 'Address',
        addressPlaceholder: 'Where is your place?',
        date: 'Date',
        people: 'People',
        money: 'Money',
        checkIn: 'Check in',
        checkOut: 'Check out',
        searchBtn: 'SEARCH'
    };

    text: any = {};

    city_id: string;
    city_name: string;
    check_in: string;
    check_out: string;
    guest_count: number;
    pages: number;
    showCityArr: boolean;

    cityArr = cities.cities;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    searchNow() {
        if (this.city_name === '' || this.city_name == null) {
            this.showCityArr = false;
        } else {
            this.showCityArr = true;
        }

        for (let i = 0; i < this.cityArr.length; i++) {
            let placeNameInArr = this.cityArr[i]['name_place'];
            if (placeNameInArr) {
                if (placeNameInArr.indexOf(this.city_name) > -1) {
                    this.cityArr[i]['show'] = 1;
                } else {
                    this.cityArr[i]['show'] = 0;
                }
            }
        }
    }

    getSelectedValue(placeCode, placeName) {
        this.city_id = placeCode;
        this.city_name = placeName;
        this.showCityArr = false;
        console.log(this.city_id);
    }

    search() {
        this.router.navigate(
            ['pages', 'tabs', 'explore', 'search'],
            {
                queryParams: {
                    city_id: this.city_id,
                    check_in: this.check_in,
                    check_out: this.check_out,
                    guest_count: this.guest_count,
                    pages: this.pages
                }
            }
        );
    }
}
