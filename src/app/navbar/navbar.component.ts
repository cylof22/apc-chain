import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input('lang') langId: string;
  defaultFontWeight: string;
  defaultColor: string
  constructor() { }

  ngOnInit() {
    let chElem = document.getElementById(this.langId);
    chElem.classList.add('active');

    let enElem = document.getElementById('en');
    enElem.style.color = 'cornflowerblue';
  }
}
