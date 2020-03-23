import {Component, OnInit} from '@angular/core';
import * as dateFn from 'date-fns';
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
        subtitle: '',
        title: 'Nhận phòng ngay với WannaGo',
        address: 'Địa điểm',
        addressPlaceholder: 'Nhập địa điểm bạn muốn đến',
        date: 'Ngày đặt',
        people: 'Số người',
        money: 'Mức giá',
        checkIn: 'Ngày đi',
        checkOut: 'Ngày ',
        searchBtn: 'TÌM KIẾM'
    };
    textEn: any = {
        subtitle: '',
        title: 'Get your room right now with WannaGo',
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

    city_id: number;
    city_name: string;
    check_in: Date;
    check_out: Date;
    guest_count: number;
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

        this.cityArr = this.cityArr.map(city => {
            if (city.name_place.indexOf(this.city_name) > -1) {
                return {...city, show: 1};
            } else {
                return {...city, show: 0};
            }
        });
    }

    getSelectedValue(placeCode, placeName) {
        this.city_id = placeCode;
        this.city_name = placeName;
        this.showCityArr = false;
        console.log(this.city_id);
    }

    search() {
        // TODO: viết hàm validate this.check_in < this.check_out

        // return nếu chưa đủ điều kiện tìm kiếm
        if (!this.city_id || !this.check_in || !this.check_out || !this.guest_count) {
            return;
        }

        this.router.navigate(
            ['pages', 'tabs', 'explore', 'search'],
            {
                queryParams: {
                    city_id: this.city_id,
                    check_in: this.convertDate(this.check_in),
                    check_out: this.convertDate(this.check_out),
                    guest_count: this.guest_count,
                    pages: 1
                }
            }
        );
    }


    private convertDate(inputDate): string {
        return ('0' + inputDate.getDate()).slice(-2) + '-' +
            ('0' + (inputDate.getMonth() + 1)).slice(-2) + '-' +
            inputDate.getFullYear();
    }

    disabledDate = (current: Date): boolean => {
        const comparedDate = this.check_in ? this.check_in : new Date();
        return dateFn.differenceInCalendarDays(current, comparedDate) < 0;
    };
}
