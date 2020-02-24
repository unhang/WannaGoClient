import { Component, OnInit } from '@angular/core';
import {StayByType, StayByTypeArray, StayService} from '../../../../../swagger';
import {MockDataService} from '../../../../service/mock-data.service';

@Component({
  selector: 'go-slices-type',
  templateUrl: './slices-type.component.html',
  styleUrls: ['./slices-type.component.scss'],
})
export class GoSlicesTypeComponent implements OnInit {

  lang = localStorage.getItem('lang');
  textVn: any = {
    title: 'TÌM THEO LOẠI CHỖ NGHỈ',
    description: 'Nhập ngay mã WEEKEND để hưởng ưu đãi giảm giá 10% tối đa 500.000đ cho toàn bộ chỗ ở bạn nhé!',
    loadMore: 'Xem thêm'
  };
  textEn: any = {
    title: 'FIND BY STAY TYPE',
    description: 'Booking, homestay, car for rent, upgrade the exp user\n' +
        'Login or Sign up to try my service',
    loadMore: 'Read more'
  };

  text: any = {};
  sliceTypes: StayByType[] = [];

  constructor(
      private stayService: StayService,
      private mockDataService: MockDataService,
  ) { }

  ngOnInit() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
    this.getSlicesByType();
  }

  getSlicesByType() {
    this.stayService.getSlicesByType(this.lang)
        .subscribe((res: StayByTypeArray) => {
          this.sliceTypes = this.mockDataService.multiply<StayByType>(res, 10);
          // console.log(this.sliceTypes);
        });
  }

}
