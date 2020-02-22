import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {StayByType} from '../../../../../../swagger';

@Component({
  selector: 'go-type-card',
  templateUrl: './type-card.component.html',
  styleUrls: ['./type-card.component.scss'],
})
export class GoTypeCardComponent implements OnInit, OnChanges {

  @Input() sliceTypes: StayByType;

  topSlideOpts: any = {
    slidesPerView: 5,
    pagination: false
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.sliceTypes);
  }
}
