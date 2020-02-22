import { Component, OnInit } from '@angular/core';
import {StayDetail, StayService} from '../../../../../swagger';
import {Router} from '@angular/router';
import {MockDataService} from '../../../../service/mock-data.service';

@Component({
  selector: 'go-one-hundred',
  templateUrl: './one-hundred.component.html',
  styleUrls: ['./one-hundred.component.scss'],
})
export class GoOneHundredComponent implements OnInit {

  lang = localStorage.getItem('lang')
  textVn: any = {
    title: 'TOP CHỖ Ở HOT 1000°C',
    description: 'Khám phá chỗ ở nổi tiếng đã xuất hiện trong các bộ phim & MV',
    loadMore: 'Xem thêm'
  };
  textEn: any = {
    title: 'WANAGO HAVE YOUR ALL TRAVEL',
    description: 'Booking, homestay, car for rent, upgrade the exp user\n' +
        'Login or Sign up to try my service',
    loadMore: 'Read more'
  };

  text: any = {};
  stays: StayDetail [] = [];
  topSlideOpts: any = {
    slidesPerView: 5,
    pagination: false
  }

  constructor(private router: Router,
              private stayService: StayService,
              private mockDataService: MockDataService) {
  }

  ngOnInit() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
    setTimeout(() => {
      this.stayService.search('01-05-2020', '31-05-2020', 79, 12, 1, 'vn')
          .subscribe(res => {
            this.stays = this.mockDataService.multiply<StayDetail>(res.result, 20);
          });
    }, 500);
  }

  goToStayDetail(stayId: number) {
    this.router.navigate(['/explore', stayId, 'stay']);
  }
}
