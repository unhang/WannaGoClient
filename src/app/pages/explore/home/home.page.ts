import {Component, OnInit} from '@angular/core';
import {HeaderStyle} from '../../../constant/HeaderStyle';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    headerStyle: any = HeaderStyle;
    isMobile = window.innerWidth < 767;

    constructor() {
    }

    ngOnInit() {
    }

}
