import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HTTPService } from './../../../service/http.service'

@Component({
  selector: 'en-public-airdrop',
  templateUrl: './public-airdrop.component.html',
  styleUrls: ['./public-airdrop.component.css']
})
export class ENPublicAirdropComponent implements OnInit {
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
    if (window.screen) {
        let mainPage = document.getElementById('wholePage');
        mainPage.style.width = window.screen.width.toString() + 'px';
    } else {
        let mainPage = document.getElementById('wholePage');
        mainPage.style.width = '1280px';
    }
  }

  onInput() {
    this.errorValue = '';
  }

  submit() {
    if (this.formModel.value.address == '') {
        this.errorValue = '请输入钱包地址';
        return;
    }

    if (this.formModel.value.telegramid == '' && this.formModel.value.wechatid == '') {
        this.errorValue = '电报和微信必须输入一个';
        return;
    }

    if (this.formModel.value.mail != null && this.formModel.value.mail != '') {
        let regEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!regEmail.test(this.formModel.value.mail)) {
            this.errorValue = '无效的邮箱地址';
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
