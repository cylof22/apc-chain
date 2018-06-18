import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class CHMainComponent {
  constructor() { }

  ngOnInit() {
    if (window.screen) {
      let mainPage = document.getElementById('main');
      mainPage.style.width = window.screen.width.toString() + 'px';
    } else {
      let mainPage = document.getElementById('main');
      mainPage.style.width = '1280px';
    }
  }
}
