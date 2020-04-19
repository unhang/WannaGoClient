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
    pagination: false,
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: true
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: true,
      },
      // when window width is <= 640px
      980: {
        slidesPerView: 3
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
  }
}
