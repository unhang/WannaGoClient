import {Component, OnInit} from '@angular/core';
import {StayDetail, StayService} from 'src/swagger';
import {MockDataService} from 'src/app/service/mock-data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {

    stays: StayDetail [] = [];

    constructor(private router: Router,
                private stayService: StayService,
                private mockDataService: MockDataService) {
    }

    ngOnInit() {
        console.log('hohooho');
        setTimeout(() => {
            this.stayService.search('01-05-2020', '31-05-2020', 79, 12, 1, 'vn')
                .subscribe(res => {
                    this.stays = this.mockDataService.multiply<StayDetail>(res.result, 20);
                });
        }, 500);
    }

    goToStayDetail(stayId: number) {
        this.router.navigate(['/pages', 'tabs', 'explore', stayId, 'stay']);
    }

}
