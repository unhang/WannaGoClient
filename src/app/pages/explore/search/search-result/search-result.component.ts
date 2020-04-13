import {Component, Input, OnInit} from '@angular/core';
import {StayDetail} from 'src/swagger';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {

    @Input() stays: StayDetail [] = [];
    @Input() onLoading = true;

    constructor() {
    }

    ngOnInit() {
    }


}
