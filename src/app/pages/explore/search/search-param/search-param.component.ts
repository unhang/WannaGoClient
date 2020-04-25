import {Component, Input, OnInit} from '@angular/core';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';

@Component({
    selector: 'app-search-param',
    templateUrl: './search-param.component.html',
    styleUrls: ['./search-param.component.scss'],
})
export class SearchParamComponent implements OnInit {

    @Input() checkIn: Date;
    @Input() checkOut: Date;
    @Input() guestCount: number;
    @Input() searchCount: number;

    lang = localStorage.getItem('lang');
    textEn: any = {
        placeholderCheckIn: 'Check in',
        placeholderCheckOut: 'Check out',
        placeholderGuestCount: 'Guest',
        apply: 'Apply',
        filter: 'Filer',
        result: 'Result count: '
    };
    textVn: any = {
        placeholderCheckIn: 'Ngày đi',
        placeholderCheckOut: 'Ngày về',
        placeholderGuestCount: 'Số khách',
        apply: 'Áp dụng',
        filter: 'Bộ lọc',
        result: 'Số kết quả: '
    };
    text = this.lang === 'en' ? this.textEn : this.textVn;

    constructor() {
    }

    ngOnInit() {
    }

    disabledDateOfCheckIn = (oldDate: Date): boolean => {
        const currentDate = new Date();
        return differenceInCalendarDays(oldDate, currentDate) < 0;
    };

    disabledDateOfCheckOut = (oldDate: Date): boolean => {
        const currentDate = new Date(this.checkIn.getTime() + (24 * 60 * 60 * 1000));
        return differenceInCalendarDays(oldDate, currentDate) < 0;
    };

}
