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

    this.httpService.register(JSON.stringify(this.formModel.value)).subscribe(
        output => {
            if (output != null) {
                this.errorValue = output;
            }

            if (this.errorValue == '') {
                this.formModel.reset();
            }
        }
    );
  }
}
