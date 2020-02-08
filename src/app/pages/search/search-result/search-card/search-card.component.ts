import {Component, Input, OnInit} from '@angular/core';
import {StaySearchResult} from '../../../../../swagger';

@Component({
    selector: 'app-search-card',
    templateUrl: './search-card.component.html',
    styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent implements OnInit {

    @Input() stay: StaySearchResult;

    constructor() {
    }

    ngOnInit() {
    }

}
