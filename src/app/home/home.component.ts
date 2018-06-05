import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMobile: boolean = false;

  constructor() { }

  ngOnInit() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf('Mobile') > -1 ||
        userAgent.indexOf('Android') > -1 || 
        userAgent.indexOf('iPhone') > -1) {
          this.isMobile = true;
    } 
  }

  getBackGroundImage() {
    var userAgent = navigator.userAgent;
    alert(userAgent);
    if (userAgent.indexOf('Mobile') > -1 ||
        userAgent.indexOf('Android') > -1 || 
        userAgent.indexOf('iPhone') > -1) {
          alert('home');
          return 'url("../assets/home.jpg")';
    } else {
      alert('home2');
      return 'url("../assets/home2.png")';
    }
  }
}
