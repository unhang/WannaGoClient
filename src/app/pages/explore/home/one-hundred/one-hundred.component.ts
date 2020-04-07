import {Component, OnInit} from '@angular/core';
import {StayDetail, StayService} from '../../../../../swagger';
import {Router} from '@angular/router';
import {MockDataService} from '../../../../service/mock-data.service';

@Component({
    selector: 'go-one-hundred',
    templateUrl: './one-hundred.component.html',
    styleUrls: ['./one-hundred.component.scss'],
})
export class GoOneHundredComponent implements OnInit {

    lang = localStorage.getItem('lang');
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

    constructor(private router: Router,
                private stayService: StayService,
                private mockDataService: MockDataService) {
    }

    ngOnInit() {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
        // TODO: viet api cho component này
        // this.stayService.ge
        // setTimeout(() => {
        //     this.stayService.search('01-05-2020', '31-05-2020', 79, 12, 1, 'vn')
        //         .subscribe((res)) => {
        //             this.stays = res);
        //         });
        // }, 500);
    }

    goToStayDetail(stayId: number) {
        this.router.navigate(['/explore', stayId, 'stay']);
    }
}
