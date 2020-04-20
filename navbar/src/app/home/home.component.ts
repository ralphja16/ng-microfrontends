import {Component, OnInit} from '@angular/core';
import {assetUrl} from 'src/single-spa/asset-url';

@Component({
  selector: 'navbar-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  computerUrl = assetUrl('computer-dashboard.jpg');

  constructor() {
  }

  ngOnInit() {
  }

}
