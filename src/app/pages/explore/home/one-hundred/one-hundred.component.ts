import {Component, OnInit} from '@angular/core';
import {StayDetail, StayService} from '../../../../../swagger';
import {Router} from '@angular/router';
import {MockDataService} from '../../../../service/mock-data.service';
import {DateUtilityService} from '../../../../services/date-utility.service';

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
        slidesPerView: 3.8,
        pagination: true,
        breakpoints: {
            767: {
                spaceBetween: '0px',
                slidesPerView: 1.2
            }
        },
    };

    constructor(private router: Router,
                private stayService: StayService,
                private dateUtil: DateUtilityService) {
    }

    ngOnInit() {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
        setTimeout(() => {
            this.stayService.getStayHot(this.lang).subscribe((res: StayDetail[]) => {
                this.stays = res;
            });
        }, 500);
    }


    goToStayDetail(stayId: number, cityId: number) {
        console.log(cityId);
        this.router.navigate(['/pages', 'tabs', 'explore', stayId, 'stay'], {
            queryParams: {
                city_id: cityId,
                guest_count: 2,
                check_in: this.dateUtil.convertDate(new Date()),
                check_out: this.dateUtil.convertDate(new Date(Date.now() + (24 * 60 * 60 * 1000))),
                page: 1,
            }
        });
    }
}
