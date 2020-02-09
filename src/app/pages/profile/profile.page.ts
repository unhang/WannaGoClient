import { Component, OnInit } from '@angular/core';
import {HeaderStyle} from '../../constant/HeaderStyle';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  headerStyle = HeaderStyle;
  constructor() { }

  ngOnInit() {
  }

}
