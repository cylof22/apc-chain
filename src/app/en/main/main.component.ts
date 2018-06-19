import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'en-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class ENMainComponent {
  constructor() { }

  ngOnInit() {
    if (window.screen) {
      let mainPage = document.getElementById('main');
      mainPage.style.width = (window.screen.width - this.getScrollbarWidth()) + 'px';
    } else {
      let mainPage = document.getElementById('main');
      mainPage.style.width = (1280 - this.getScrollbarWidth()) + 'px';
    }
  }

  getScrollbarWidth() {
    let tempCtrl = document.createElement('p');
    tempCtrl.style.width = '100px';
    tempCtrl.style.height = '100px';
    tempCtrl.style.overflowY = 'scroll';
    document.body.appendChild(tempCtrl);

    let scrollbarWidth = tempCtrl.offsetWidth - tempCtrl.clientWidth;
    tempCtrl.remove();

    return scrollbarWidth;
  }
}
