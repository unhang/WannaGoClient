import {Component, Input, OnInit} from '@angular/core';
import {HighlightPlace} from '../../../../../../swagger';

@Component({
  selector: 'go-area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss'],
})
export class GoAreaCardComponent implements OnInit {

  lang = localStorage.getItem('lang')
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

  @Input() place: HighlightPlace

  constructor() { }

  ngOnInit() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

}
