import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {StaySearch, StaySearchResult} from '../../../../swagger';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit, AfterViewInit {

  @Input() stays: StaySearchResult[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.stays);
  }

  ngAfterViewInit(): void {
    console.log(this.stays);
  }



}
