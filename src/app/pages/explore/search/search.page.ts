import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from 'src/app/constant/HeaderStyle';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    headerStyle = HeaderStyle;

    constructor() {
    }

    ngOnInit() {

    }

}
