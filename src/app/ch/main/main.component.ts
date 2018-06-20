import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class CHMainComponent {
  bMobile: boolean = false;
  bIpad: boolean = false;
  constructor() { }

  ngOnInit() {
    this.isMobile();

    if (!this.bMobile) {
      if (window.screen) {
        let mainPage = document.getElementById('main');
        if (this.bIpad) {
          mainPage.style.width = (window.screen.width) + 'px';
        }
        else {
          mainPage.style.width = (window.screen.width - this.getScrollbarWidth()) + 'px';
        }
      } else {
        let mainPage = document.getElementById('main');
        mainPage.style.width = (1280 - this.getScrollbarWidth()) + 'px';
      }
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

  isMobile() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf('Mobile') > -1 ||
        userAgent.indexOf('Android') > -1 || 
        userAgent.indexOf('iPhone') > -1) {
          this.bMobile = true;
    } 

    if (userAgent.indexOf('iPad') > -1) {
      this.bMobile = false;
      this.bIpad = true;
    }
  
  }
}
