import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageSrc: string = '';

  constructor() { }

  ngOnInit() {
    let isMobile = false;
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf('Mobile') > -1 ||
        userAgent.indexOf('Android') > -1 || 
        userAgent.indexOf('iPhone') > -1) {
          isMobile = true;
    } 

    if (userAgent.indexOf('iPad') > -1) {
      isMobile = false;
    }

    if (isMobile) {
      this.imageSrc = 'assets/home.jpg';
    } else {
      this.imageSrc = 'assets/home2.png';
    }
  }
}
