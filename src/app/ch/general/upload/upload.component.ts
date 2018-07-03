import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HTTPService } from './../../../service/http.service'

@Component({
  selector: 'ch-app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class CHUploadComponent implements OnInit {
    formModel: FormGroup;
    errorValue: string = '';
    successValue: string = '';
    showReselectCtrl: boolean = false;
    showQRCode: boolean = false;
    bMobile: boolean = false;

    constructor(private httpService: HTTPService) { 
        const fb = new FormBuilder();
        this.formModel = fb.group({
        'address': '',
        'wechatid': '',
        'picData': ''
        })
    }

    ngOnInit() {
        this.bMobile = this.isMobile();
        if (!this.bMobile) {
            let generalCtrl = document.getElementById('generalInfo');
            generalCtrl.style.width = '580px';
        }
    }

    onInput() {
        this.successValue = '';
        this.errorValue = '';
    }

    submit() {
        this.successValue = '';
        this.errorValue = '';
        
        if (this.formModel.value.wechatid == '') {
            this.errorValue = '请输入微信账号';
            return;
        }

        let img = document.getElementById("imagePreview");
        this.formModel.value.picData = img.getAttribute("src");
        if (this.formModel.value.picData == null || this.formModel.value.picData == '') {
            this.errorValue = '请选择图片';
            return;
        }

        this.successValue = '上传中...';
        this.httpService.upload(JSON.stringify(this.formModel.value)).subscribe(
            output => {
                if (this.errorValue == '') {
                    this.successValue = '上传成功';
                    this.errorValue = '';
                }
            },
            error => {
                if (error != null) {
                    let errorInfo: string = error.error['text'];
                    if (errorInfo.length > 20) {
                        errorInfo = '上传失败'
                    }
                    this.errorValue = errorInfo;
                    this.successValue = '';
                }
            }
        )
    }

    selectFile() {
        this.successValue = '';

        if (this.errorValue != '') {
            this.errorValue = '';
        }
        
        var selectCtrl = document.getElementById("imagePath");
        selectCtrl.click();
    }

    showImage(input) {
        // show image
        let reader = new FileReader();
        let file = input.files[0];
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            let img = document.getElementById("imagePreview");
            img.setAttribute("src", this.result);
        }
    }

    showReselectBtn() {
        let img = document.getElementById("imagePreview");
        if (img == null) {
            this.showReselectCtrl = false;
            return;
        }
        
        let srcValue = img.getAttribute("src");
        if (srcValue == null) {
            this.showReselectCtrl = false;
            return;
        }

        if (srcValue != '') {
            this.showReselectCtrl = true;
        } else {
            this.showReselectCtrl = false;
        }
    }

    removeReselectBtn() {
        this.showReselectCtrl = false;
    }

    showWechat() {
        this.showQRCode = true;
    }
  
    hideWchat() {
      this.showQRCode = false;
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
