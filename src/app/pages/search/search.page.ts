import {Component, OnInit} from '@angular/core';
import {StaySearch, StaySearchResult, StayService} from '../../../swagger';
import {MockDataService} from '../../service/mock-data.service';
import {HeaderStyle} from '../../constant/HeaderStyle';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    searchStay: StaySearchResult[] = [];
    headerStyle = HeaderStyle;

    constructor(private stayService: StayService,
                private mockDataService: MockDataService) {
    }

    ngOnInit() {
        this.stayService.search('01-05-2020', '31-05-2020', 79, 12, 'vn')
            .subscribe(res => {
                console.log('dasfasdfsdf');
                this.searchStay = this.mockDataService.multiply<StaySearchResult>(res.result, 20);
                console.log(this.searchStay);
            });
    }


}
