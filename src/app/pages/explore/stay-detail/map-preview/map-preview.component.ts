import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-map-preview',
  templateUrl: './map-preview.component.html',
  styleUrls: ['./map-preview.component.scss'],
})
export class MapPreviewComponent {
  @Input() lng: number;
  @Input() lat: number;
  key = 'AIzaSyCvIj7s2hPfVknqi8lycbNQQ7DlqeFytcU';

  constructor() { }

}
