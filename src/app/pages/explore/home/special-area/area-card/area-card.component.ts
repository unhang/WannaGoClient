import {Component, Input, OnInit} from '@angular/core';
import {HighlightPlace} from '../../../../../../swagger';

@Component({
  selector: 'go-area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss'],
})
export class GoAreaCardComponent implements OnInit {

  @Input() place: HighlightPlace

  constructor() { }

  ngOnInit() {}

}
