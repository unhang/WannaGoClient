import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CommentDetail} from '../../../../../../swagger';

@Component({
    selector: 'app-comment-detail',
    templateUrl: './comment-detail.component.html',
    styleUrls: ['./comment-detail.component.scss'],
})
export class CommentDetailComponent implements OnInit, OnChanges {
    @Input() comment: CommentDetail;
    lang = localStorage.getItem('lang');
    textVn: any = {
        guard: 'Khách hàng đã đặt phòng'
    };
    textEn: any = {
        guard: 'Customer booked this stay'
    };
    txt: any = {};

    constructor() {
        this.txt = this.lang === 'en' ? this.textEn : this.textVn;
    }

    ngOnInit() {
    }

    ngOnChanges(): void {
    }

}
