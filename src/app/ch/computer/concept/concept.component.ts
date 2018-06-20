import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-concept-page',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.css']
})
export class CHConceptComponent {
  constructor() { }

  ngOnInit() {
    this.calHeight();
  }

  calHeight() {
    if (window.screen) {
      let curPage = document.getElementById('concept');
      // 6798 and 4001 is background image's width and height
      curPage.style.height = (window.screen.width * 6798/4001) + 'px';
    }
  }
}
