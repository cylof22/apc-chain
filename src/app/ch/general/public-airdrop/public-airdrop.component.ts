import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HTTPService } from './../../../service/http.service'

@Component({
  selector: 'ch-public-airdrop',
  templateUrl: './public-airdrop.component.html',
  styleUrls: ['./public-airdrop.component.css']
})
export class CHPublicAirdropComponent implements OnInit {
    bMobile: boolean = false;

    constructor() { 
    }

  ngOnInit() {
    this.bMobile = this.isMobile();
  }

  isMobile() {
    let isMobile = false;
    var userAgent = navigator.userAgent;
    if (userAgent.indexOf('Mobile') > -1 ||
        userAgent.indexOf('Android') > -1 || 
        userAgent.indexOf('iPhone') > -1) {
          isMobile = true;
    } 

    if (userAgent.indexOf('iPad') > -1) {
      isMobile = false;
    }
    
    return isMobile;
  }
}
