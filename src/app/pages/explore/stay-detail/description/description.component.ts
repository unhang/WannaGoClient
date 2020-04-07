import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {StayDetail} from '../../../../../swagger';

@Component({
    selector: 'app-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit, OnChanges {
    @Input() stayDetail: StayDetail;
    utilities: string[] = [];

    constructor() {
    }

    ngOnInit() {

    }

    ngOnChanges() {
        if (this.stayDetail.stayUtility) {
            Object.keys(this.stayDetail.stayUtility).forEach(key => {
                this.utilities = [...this.utilities, key];
            });
            console.log(this.utilities);
        }

    }

}
