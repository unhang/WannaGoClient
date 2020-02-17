import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class GoSearchCard implements OnInit {

  lang = localStorage.getItem('lang')
  textVn: any = {
    title: 'NHẬN PHÒNG NGAY VỚI WANNAGO !!!',
    address: 'Địa điểm',
    addressPlaceholder: 'Nhập địa điểm bạn muốn đến',
    date: 'Ngày đặt',
    people: 'Số người',
    money: 'Mức giá',
    searchBtn: 'TÌM KIẾM'
  };
  textEn: any = {
    title: 'GET YOUR ROOM RIGHT NOW WITH WANNGO !!!',
    address: 'Address',
    addressPlaceholder: 'Where is your place?',
    date: 'Date',
    people: 'People',
    money: 'Money',
    searchBtn: 'SEARCH'
  };

  text: any = {};

  constructor() { }

  ngOnInit() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

}
