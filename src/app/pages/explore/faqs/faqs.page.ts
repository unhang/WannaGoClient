import { Component, OnInit } from '@angular/core';
import {HeaderStyle} from '../../../constant/HeaderStyle';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
})
export class FaqsPage implements OnInit {
  headerStyle: any = HeaderStyle;
  constructor() { }

  ngOnInit() {
  }

}
