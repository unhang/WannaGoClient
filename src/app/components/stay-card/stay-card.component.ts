import {Component, Input, OnInit} from '@angular/core';
import {StayDetail} from '../../../swagger';

@Component({
    selector: 'go-stay-card',
    templateUrl: './stay-card.component.html',
    styleUrls: ['./stay-card.component.scss'],
})
export class GoStayCardComponent implements OnInit {
    lang = localStorage.getItem('lang');
    textEn: any = {
        price: 'Price',
        starCount: 'Stars',
        comments: 'Coments',
        guest: 'Guest(s)',
        bedRoom: 'Bed room',
        bathRoom: 'Bath room',
    };

    textVn: any = {
        price: 'Giá',
        starCount: 'Số sao',
        comments: 'Bình luận',
        guest: 'Khách',
        bedRoom: 'Phòng',
        bathRoom: 'Phòng tắm',
    };
    text = this.lang === 'en' ? this.textEn : this.textVn;
    @Input() stay: StayDetail;

    constructor() {
    }

    ngOnInit() {
    }

}
