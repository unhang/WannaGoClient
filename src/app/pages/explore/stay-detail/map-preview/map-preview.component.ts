import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-preview',
  templateUrl: './map-preview.component.html',
  styleUrls: ['./map-preview.component.scss'],
})
export class MapPreviewComponent implements OnInit {
  @Input() lng: number;
  @Input() lat: number;
  constructor() { }

  ngOnInit() {}

}
