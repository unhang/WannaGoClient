import {Component, Input, OnInit} from '@angular/core';
import {StayDetail, StayService} from 'src/swagger';
import {MockDataService} from 'src/app/service/mock-data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {

    @Input() stays: StayDetail [] = [];
    @Input() onLoading = true;
    constructor(private router: Router) {
    }

    ngOnInit() {
    }


}
