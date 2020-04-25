import {Component, Input, OnInit} from '@angular/core';
import {HighlightPlace} from '../../../../../../swagger';
import {Router, RouterModule} from '@angular/router';
import {DateUtilityService} from '../../../../../services/date-utility.service';

@Component({
    selector: 'go-area-card',
    templateUrl: './area-card.component.html',
    styleUrls: ['./area-card.component.scss'],
})
export class GoAreaCardComponent implements OnInit {

    lang = localStorage.getItem('lang');
    textVn: any = {
        avgPrice: 'Giá trung bình',
        addressPrice: 'chỗ ở',
        unitPrice: 'VNĐ'
    };
    textEn: any = {
        avgPrice: 'Average price',
        addressPrice: 'place',
        unitPrice: 'VND'
    };

    text: any = {};

    @Input() place: HighlightPlace;

    constructor(private router: Router,
                private dateUtil: DateUtilityService) {
    }

    ngOnInit() {
        this.text = this.lang === 'en' ? this.textEn : this.textVn;
    }

    goToSearch() {
        this.router.navigate(['/pages', 'tabs', 'explore', 'search'],{
            queryParams: {
                city_id: this.place.cityCode,
                check_in: this.dateUtil.convertDate(new Date()),
                check_out: this.dateUtil.convertDate(new Date(Date.now() + 86400000)),
                guest_count: 2,
                page: 1
            }
        });
    }

}
