import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HTTPService } from './../../service/http.service'

@Component({
  selector: 'en-app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class CHUploadComponent implements OnInit {
    formModel: FormGroup;
    errorValue: string = '';
    showReselectCtrl: boolean = false;

    constructor(private httpService: HTTPService) { 
        const fb = new FormBuilder();
        this.formModel = fb.group({
        'address': '',
        'wechatid': '',
        'picData': ''
        })
    }

    ngOnInit() {
    }

    onInput() {
        this.errorValue = '';
    }

    submit() {
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

        this.httpService.upload(JSON.stringify(this.formModel.value)).subscribe(
            output => {
                if (output != null) {
                    this.errorValue = output;
                }

                if (this.errorValue == '') {
                    this.formModel.reset({
                        'address': '',
                        'wechatid': '',
                        'picData': ''
                        });
                }
            }
        )
    }

    selectFile() {
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
}
