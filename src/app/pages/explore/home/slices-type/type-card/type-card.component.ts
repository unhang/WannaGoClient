import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {StayByType} from '../../../../../../swagger';

@Component({
  selector: 'go-type-card',
  templateUrl: './type-card.component.html',
  styleUrls: ['./type-card.component.scss'],
})
export class GoTypeCardComponent implements OnInit, OnChanges {

  @Input() sliceTypes: StayByType

  topSlideOpts: any = {
    slidesPerView: 5,
    // preloadImages: true,
    // slidesPerView: 2.5,
    // spaceBetween: 0,
    // // navigation: {
    // //     nextEl: '.swiper-button-next',
    // //     prevEl: '.swiper-button-prev',
    // // },
    // breakpoints: {
    //   // when window width is < 480px
    //   767: {
    //     slidesPerView: 1,
    //     // spaceBetween: 30
    //   },
    //   // when window width is >= 640px
    //   // 1200: {
    //   //     slidesPerView: 2.5,
    //   // }
    // },
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   dynamicBullets: true,
    // },
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // },

  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.sliceTypes);
  }
}
