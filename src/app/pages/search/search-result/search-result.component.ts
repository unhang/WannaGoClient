import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {StayDetail, StayService} from '../../../../swagger';
import {MockDataService} from '../../../service/mock-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit, AfterViewInit {

  @Input() stays: StayDetail [] = [];

  constructor(
      private stayService: StayService,
      private mockDataService: MockDataService) { }

  ngOnInit() {
    this.stayService.search('01-05-2020', '31-05-2020', 79, 12, 1, 'vn')
        .subscribe(res => {
          this.stays = this.mockDataService.multiply<StayDetail>(res.result, 20);
        });
  }

  ngAfterViewInit(): void {
    console.log(this.stays);
  }



}
