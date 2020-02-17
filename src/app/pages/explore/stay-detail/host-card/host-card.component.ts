import {Component, Input, OnInit} from '@angular/core';
import {HostInfo} from '../../../../../swagger';

@Component({
  selector: 'app-host-card',
  templateUrl: './host-card.component.html',
  styleUrls: ['./host-card.component.scss'],
})
export class HostCardComponent implements OnInit {
  @Input() host: HostInfo;
  constructor() { }

  ngOnInit() {}

}
