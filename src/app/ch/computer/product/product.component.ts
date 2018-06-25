import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class CHProductComponent implements OnInit {
  playVideo: boolean;
  constructor() { 
    this.playVideo = false;
  }

  ngOnInit() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf('iPad') > -1 && window.screen) {
      this.adjustPosition();
    }
  }

  play() {
    this.playVideo = true;
    let vedio = <HTMLVideoElement>document.getElementById('video');
    if (vedio != null) {
      vedio.play();
      vedio.webkitEnterFullscreen();
    }
  }

  playEnded() {
    document.webkitCancelFullScreen();
    this.playVideo = false;
  }

  adjustPosition() {
    let screenWidth = window.screen.width;
    let offsetValue = screenWidth - 1280;

    // change height
    let pageCtrl = document.getElementById('product');
    if (offsetValue < 0) {
      pageCtrl.style.height = (pageCtrl.clientHeight + offsetValue * 0.4).toString() + 'px';
    } else {
      pageCtrl.style.height = (pageCtrl.clientHeight + offsetValue * 0.2).toString() + 'px';
    }

    // adjust stickiness group's position according to aigroup's position
    let generalCtrl = document.getElementById('generalInfo');
    let newWidth = screenWidth * 0.48 - offsetValue * 0.4;
    generalCtrl.style.width = newWidth.toString() + 'px';

    let vedioCtrl = document.getElementById('vidoGroup');
    let vedioWidth = screenWidth - newWidth - screenWidth * 0.06; // 0.06 means margin left
    vedioCtrl.style.width = vedioWidth.toString() + 'px';

    let playCtrl = document.getElementById('play');
    if (offsetValue < 0) {
      playCtrl.style.marginLeft = (vedioWidth/2 + Math.abs(offsetValue) * 0.1).toString() + 'px';
    } else {
      playCtrl.style.marginLeft = (vedioWidth/2 + Math.abs(offsetValue) * 0.2).toString() + 'px';
    }

    let video = document.getElementById('video');
    let weight = 0.3;
    if (offsetValue > 0) {
      weight = 0.4;
    }
    video.style.marginLeft = (vedioWidth/4 + offsetValue * weight).toString() + 'px';
  }
}
