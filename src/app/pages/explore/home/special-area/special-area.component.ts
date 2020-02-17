import { Component, OnInit } from '@angular/core';
import {HighlightPlace, StayService} from '../../../../../swagger';
import {MockDataService} from "../../../../service/mock-data.service";

@Component({
  selector: 'go-special-area',
  templateUrl: './special-area.component.html',
  styleUrls: ['./special-area.component.scss'],
})
export class GoSpecialAreaComponent implements OnInit {

  lang = localStorage.getItem('lang')
  textVn: any = {
    title: 'ĐỊA ĐIỂM NỔI BẬT',
    description: 'Cùng Wanago bắt đầu chuyến hành trình chinh phục thế giới của bạn',
    loadMore: 'Xem thêm'
  };
  textEn: any = {
    title: 'SPECIAL AREA',
    description: 'Booking, homestay, car for rent, upgrade the exp user\n' +
        'Login or Sign up to try my service',
    loadMore: 'Read more'
  };

  text: any = {};
  highLightPlaces: HighlightPlace[] = [];

  constructor(
      private stayService: StayService,
      private mockDataService: MockDataService,
  ) { }

  ngOnInit() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
    this.getSpecialArea();
  }

  getSpecialArea() {
    this.stayService.stayGetHighlightPlaces(this.lang)
        .subscribe((res: HighlightPlace[]) => {
          this.highLightPlaces = this.mockDataService.multiply<HighlightPlace>(res, 5)
          console.log(res);
          console.log(this.highLightPlaces);
        });
  }

}
