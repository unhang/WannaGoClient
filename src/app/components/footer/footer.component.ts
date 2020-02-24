import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'go-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class GoFooterComponent implements OnInit {

  lang = localStorage.getItem('lang')
  textVn: any = {
    paymethod: 'GIAO DỊCH AN TOÀN',
    certification: 'CHỨNG NHẬN',
    social: 'THEO CHÚNG TÔI',
  };
  textEn: any = {
    paymethod: 'SECURE YOUR TRANSACTION',
    certification: 'CERTIFICATION',
    social: 'FOLLOW US',
  };

  text: any = {};

  constructor() { }

  ngOnInit() {
    this.text = this.lang === 'en' ? this.textEn : this.textVn;
  }

}
