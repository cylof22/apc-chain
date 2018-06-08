import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HTTPService } from './../../service/http.service'

@Component({
  selector: 'ch-app-airdrop',
  templateUrl: './airdrop.component.html',
  styleUrls: ['./airdrop.component.css']
})
export class CHAirdropComponent implements OnInit {
    formModel: FormGroup;
    errorValue: string = '';

    constructor(private httpService: HTTPService) { 
        const fb = new FormBuilder();
        this.formModel = fb.group({
        'name': '',
        'phone': '',
        'mail': '',
        'address': '',
        'telegramid': '',
        'wechatid': ''
        })
    }

  ngOnInit() {
  }

  onInput() {
    this.errorValue = '';
  }

  submit() {
    //this.errorValue = this.formModel.value.mail;
    //alert(JSON.stringify(this.formModel.value));

    if (this.formModel.value.mail != '') {
        let regEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!regEmail.test(this.formModel.value.mail)) {
            this.errorValue = 'Email invalid';
            return;
        }
    }

    this.httpService.register(JSON.stringify(this.formModel.value)).subscribe(
        output => {
        }
    );
  }
}
