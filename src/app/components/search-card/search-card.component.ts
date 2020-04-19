import {Component, OnInit} from '@angular/core';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
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
        checkOut: 'Ngày về',
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

    checkIn: Date;
    checkOut: Date;
    today = new Date();
    guestCount: number;

    citiesData = cities.cities;
    filteredCities: string[] = [];
    cityId: number;
    cityName: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    onCityChange() {
        const cityName = this.convertNonAccent(this.cityName);
        const filteredCities = this.citiesData.filter(city => {
            const namePlace = this.convertNonAccent(city.name_place);
            return namePlace.indexOf(cityName) > -1;
        });
        if (filteredCities.length === 1) {
            this.cityId = filteredCities[0].code_place;
        }
        this.filteredCities = filteredCities.map(city => city.name_place);
    }

    convertNonAccent(inputValue: string): string {
        inputValue = inputValue.toLowerCase();
        inputValue = inputValue.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        inputValue = inputValue.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        inputValue = inputValue.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        inputValue = inputValue.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        inputValue = inputValue.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        inputValue = inputValue.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        inputValue = inputValue.replace(/đ/g, 'd');
        // Some system encode vietnamese combining accent as individual utf-8 characters
        inputValue = inputValue.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
        inputValue = inputValue.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
        return inputValue;
    }

    search() {
        // TODO: viết hàm validate this.checkIn < this.checkOut

        // return nếu chưa đủ điều kiện tìm kiếm
        // Gán trục tiếp giá trị = , return phải click button search 3 lần, mới thực hiện function
        this.handleEmptyInput();
        this.router.navigate(
            ['pages', 'tabs', 'explore', 'search'],
            {
                queryParams: {
                    city_id: this.cityId,
                    check_in: this.convertDate(this.checkIn),
                    check_out: this.convertDate(this.checkOut),
                    guest_count: this.guestCount,
                    page: 1
                }
            }
        );
    }

    handleEmptyInput() {
        if (!this.cityId) {
            this.cityId = 197;
        }

        if (!this.checkIn) {
            this.checkIn = new Date();
        }

        if (!this.checkOut) {
            this.checkOut = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
        }

        if (!this.guestCount) {
            this.guestCount = 2;
        }
    }

    private convertDate(inputDate): string {
        return ('0' + inputDate.getDate()).slice(-2) + '-' +
            ('0' + (inputDate.getMonth() + 1)).slice(-2) + '-' +
            inputDate.getFullYear();
    }

    disabledDateOfCheckIn = (oldDate: Date): boolean =>{
        const currentDate = new Date();
        return differenceInCalendarDays(oldDate, currentDate) < 0;
    }

    disabledDateOfCheckOut = (oldDate: Date): boolean => {
        const currentDate = new Date(this.checkIn.getTime() + (24 * 60 * 60 * 1000));
        return differenceInCalendarDays(oldDate, currentDate) < 0;
    }
}
