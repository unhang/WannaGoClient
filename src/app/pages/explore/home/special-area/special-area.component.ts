import {Component, OnInit} from '@angular/core';
import {HighlightPlace, StayService} from '../../../../../swagger';

@Component({
    selector: 'go-special-area',
    templateUrl: './special-area.component.html',
    styleUrls: ['./special-area.component.scss', '../home.page.scss'],
})
export class GoSpecialAreaComponent implements OnInit {

    lang = localStorage.getItem('lang');
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

    constructor(private stayService: StayService) {
    }

    ngOnInit() {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
        this.getSpecialArea();
    }

    getSpecialArea() {
        this.stayService.stayGetHighlightPlaces(this.lang)
            .subscribe((res: HighlightPlace[]) => {
                this.highLightPlaces = res;
            });
    }

}
