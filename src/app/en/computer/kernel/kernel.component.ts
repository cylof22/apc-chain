import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'en-app-kernel',
  templateUrl: './kernel.component.html',
  styleUrls: ['./kernel.component.css']
})
export class ENKernelComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    let isMobile = false;
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf('Mobile') > -1 ||
        userAgent.indexOf('Android') > -1 || 
        userAgent.indexOf('iPhone') > -1) {
          isMobile = true;
    } 

    if (isMobile) {
      this.setLeftRightMarginZero('col-md-3-5');
    }
  }

  setLeftRightMarginZero(className: string) {
    let elems = document.getElementsByClassName(className);

    for (let i = 0; i < elems.length; i++) {
      let elem = <HTMLElement>elems[i];
      elem.style.marginLeft = '0';
      elem.style.marginRight = '-2';
      elem.style.width = '100%';
    }
  }
}
