import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'en-app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ENProductComponent implements OnInit {
  playVideo: boolean;
  constructor() { 
    this.playVideo = false;
  }

  ngOnInit() {
  }

  play() {
    this.playVideo = true;
    let vedio = <HTMLVideoElement>document.getElementById('video');
    if (vedio != null) {
      vedio.play();
    }
  }
}
