import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-app-kernel',
  templateUrl: './kernel.component.html',
  styleUrls: ['./kernel.component.css']
})
export class CHKernelComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    if (window.screen) {
      this.adjustPosition();
    }
  }

  adjustPosition() {
    let screenWidth = window.screen.width;
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf('iPad') > -1) {
      let pageCtrl = document.getElementById('kernal-container')
      screenWidth = pageCtrl.offsetWidth;
    }

    // adjust stickiness group's position according to aigroup's position
    let aiInfo = document.getElementById('aiInfo')
    let imageHeight = screenWidth * 0.22; // 0.22 = 0.297 * 716/967(宽 * 像素高/像素宽)
    let offset = (aiInfo.offsetHeight + imageHeight) * 0.7;
    let stickinessCtrl = document.getElementById('stickinessGroup');
    stickinessCtrl.style.marginTop = (-offset).toString() + 'px';

    // adjust controls' position for pad
    if (userAgent.indexOf('iPad') > -1) {
      let offsetValue = (screenWidth - 1280) * 0.1;

      let weight = 1.6;
      if (offsetValue > 0) {
        weight = -0.5;
      } 

      // for sharing group
      // let ctrlId = 'sharingGroup';
      // let ctrl = document.getElementById(ctrlId);
      // ctrl.style.marginTop = (-screenWidth * 0.078 + offsetValue * weight).toString() + 'px';

      weight = 1;
      if (offsetValue > 0) {
        weight = 0.5;
      }

      let ctrlId = 'jiliGroup';
      let ctrl = document.getElementById(ctrlId);
      ctrl.style.marginTop = (-screenWidth * 0.13 + offsetValue * weight).toString() + 'px';

      ctrlId = 'aiGroup';
      ctrl = document.getElementById(ctrlId);
      ctrl.style.marginTop = (-screenWidth * 0.05 + offsetValue * weight).toString() + 'px';

      stickinessCtrl.style.marginTop = (-offset).toString() + 'px';

      ctrlId = 'copyrightGroup';
      ctrl = document.getElementById(ctrlId);
      ctrl.style.marginTop = (screenWidth * 0.039).toString() + 'px';
    }
  }
}
