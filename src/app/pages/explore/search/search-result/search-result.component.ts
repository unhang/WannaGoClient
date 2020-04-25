import {Component, Input, OnInit} from '@angular/core';
import {StayDetail} from 'src/swagger';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {

    @Input() stays: StayDetail [] = [];
    @Input() favorites: any;
    @Input() onLoading = true;

    lang = localStorage.getItem('lang');
    textEn = {
        result: 'Result count: '
    };
    textVn = {
        result: 'Số lượng kết quả: '
    };
    text = this.lang === 'en' ? this.textEn : this.textVn;

    constructor() {
    }

    ngOnInit() {
    }
}
