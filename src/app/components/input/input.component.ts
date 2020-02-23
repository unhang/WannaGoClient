import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class GoInput implements OnInit {

  lang = localStorage.getItem('lang')
  textVn: any = {
    placehoder: 'Địa điểm bạn muốn đến thăm',
  };
  textEn: any = {
    placehoder: 'Where your place go...',
  };

  text: any = {};

  constructor() { }

  ngOnInit() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }
}
