import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import {StayDetail} from '../../../../../swagger';


@Component({
    selector: 'app-search-card',
    templateUrl: './search-card.component.html',
    styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent implements OnInit {

    @Input() stay: StayDetail

    constructor() {
    }

    ngOnInit() {
    }

}
