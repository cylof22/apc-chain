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
    this.adjustPosition();
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
    // height of background image
    let pageCtrl = document.getElementById('product');
    let screenWidth = window.screen.width;
    if (this.isIPad()) {
      screenWidth = pageCtrl.offsetWidth;
    }
    let backgroundHeight = screenWidth * 3059 / 4000;

    // set current page height to background image height
    pageCtrl.style.height = backgroundHeight.toString() + 'px';

    // reset general info control's height
    let topBrushHeight = this.getTopBrushHeight(screenWidth);
    this.setGeneralInfoHeight(backgroundHeight, topBrushHeight);
    
    // set margin top of the button that is used to play video
    this.adjustPlayButton(backgroundHeight, topBrushHeight);
  }

  setGeneralInfoHeight(pageHeight, brushHeight: number) {
    // the height of left panel: top brush, general info and a part of Airdrop image
    // and it shouldn't be larger than page height
    let airdropImageHeight = 50 + 50; // one 50 is height of the image and the other is margin top
    let idealInfoHeight = pageHeight - brushHeight - airdropImageHeight + 10; // -10 is its margin top
    
    // set general info's height
    let generalCtrl = document.getElementById('generalInfo');
    if (generalCtrl.offsetHeight > idealInfoHeight) {
      generalCtrl.style.height = idealInfoHeight.toString() + 'px';
      generalCtrl.style.overflowY = 'auto';
    }
  }

  getTopBrushHeight(screenWidth) {
    let imageWidth = screenWidth * 0.39; 
    let imageHeight = imageWidth * 1539 / 1544; // 1539/1544 is pixel of height / pixel / width
    let heightInCurrentPage = imageHeight - screenWidth * 0.125; // screenWidth * -0.125 is margin top

    return heightInCurrentPage;
  }

  adjustPlayButton(pageHeight, brushHeight: number) {
    let idealMarginTop = 0.37 * pageHeight;
    let brushHeightInPage = brushHeight * (1 - 0.125); // -0.125 is margin top of brush
    let realMarginTop = idealMarginTop - brushHeightInPage -30/2; // 30 is height of play button

    let playButton = document.getElementById('play');
    playButton.style.marginTop = realMarginTop.toString() + 'px';
  }

  isIPad() {
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf('iPad') > -1) {
      return true;
    } else {
      return false;
    }
  }
}
