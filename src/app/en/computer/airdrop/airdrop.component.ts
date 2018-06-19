import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HTTPService } from './../../../service/http.service'

@Component({
  selector: 'en-app-airdrop',
  templateUrl: './airdrop.component.html',
  styleUrls: ['./airdrop.component.css']
})
export class ENAirdropComponent implements OnInit {
    formModel: FormGroup;
    errorValue: string = '';
    showQRCode: boolean = false;

    constructor(private httpService: HTTPService) { 
        const fb = new FormBuilder();
        this.formModel = fb.group({
        'name': '',
        'phone': '',
        'mail': '',
        'address': '',
        'telegramid': '',
        'wechatid': '',
        'profession': '',
        })
    }

  ngOnInit() {
  }

  onInput() {
    this.errorValue = '';
  }

  submit() {
    if (this.formModel.value.address == '') {
        this.errorValue = 'Please input digital wallet address';
        return;
    }

    if (this.formModel.value.telegramid == '' && this.formModel.value.wechatid == '') {
        this.errorValue = 'You must enter one for the telegram and the WeChat';
        return;
    }

    if (this.formModel.value.mail != null && this.formModel.value.mail != '') {
        let regEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!regEmail.test(this.formModel.value.mail)) {
            this.errorValue = 'Invalid email';
            return;
        }
    }

    this.formModel.value.phone = this.formModel.value.phone.toString();
    this.httpService.register(JSON.stringify(this.formModel.value)).subscribe(
        output => {
            if (output != null) {
                this.errorValue = output;
            }

            if (this.errorValue == '') {
                this.formModel.reset({
                    'name': '',
                    'phone': '',
                    'mail': '',
                    'address': '',
                    'telegramid': '',
                    'wechatid': '',
                    'profession': '',
                    });
            }
        }
    )
  }

  showWechat() {
      this.showQRCode = true;
  }

  hideWchat() {
    this.showQRCode = false;
  }
}
