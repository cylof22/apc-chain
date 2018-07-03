import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CHComputerModule } from './computer/ch.computer.module'
import { CHMobileModule } from './mobile/ch.mobile.module'
import { NavbarModule } from './../navbar/navbar.module'

import { CHMainComponent } from './main/main.component';
import { CHFooterComponent } from './general/footer/footer.component';
import { CHHomeComponent } from './general/home/home.component';
import { CHContactComponent } from './general/contact/contact.component';
import { CHUploadComponent } from './general/upload/upload.component'
import { CHPublicAirdropComponent } from './general/public-airdrop/public-airdrop.component'

@NgModule({
    declarations: [
      CHMainComponent,
      CHFooterComponent,
      CHHomeComponent,
      CHContactComponent,
      CHUploadComponent,
      CHPublicAirdropComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CHComputerModule,
        CHMobileModule,
        NavbarModule,
        RouterModule.forChild([
            // {path: 'cn/airdrop', component: CHPublicAirdropComponent},
            {path: 'cn/upload', component: CHUploadComponent},
    ])
    ],
  })
  export class CHModule { }