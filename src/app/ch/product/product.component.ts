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
  }

  play() {
    this.playVideo = true;
    let vedio = <HTMLVideoElement>document.getElementById('video');
    if (vedio != null) {
      vedio.play();
    }
  }
}
