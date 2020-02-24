import {Component, Input, OnInit} from '@angular/core';
import {StayDetail} from '../../../swagger';

@Component({
  selector: 'go-stay-card',
  templateUrl: './stay-card.component.html',
  styleUrls: ['./stay-card.component.scss'],
})
export class GoStayCardComponent implements OnInit {

  @Input() stay: StayDetail

  constructor() { }

  ngOnInit() {}

}
