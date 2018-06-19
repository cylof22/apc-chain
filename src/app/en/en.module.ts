import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ENComputerModule } from './computer/en.computer.module'
import { NavbarModule } from './../navbar/navbar.module'

import { ENMainComponent } from './main/main.component';
import { ENFooterComponent } from './general/footer/footer.component';
import { ENHomeComponent } from './general/home/home.component';
import { ENContactComponent } from './general/contact/contact.component';
import { ENUploadComponent } from './general/upload/upload.component'
import { ENPublicAirdropComponent } from './general/public-airdrop/public-airdrop.component'

@NgModule({
    declarations: [
      ENMainComponent,
      ENFooterComponent,
      ENHomeComponent,
      ENContactComponent,
      ENUploadComponent,
      ENPublicAirdropComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ENComputerModule,
        NavbarModule,
        RouterModule.forChild([
            {path: 'en', component: ENMainComponent},
            {path: 'en/airdrop', component: ENPublicAirdropComponent},
    ])
    ],
  })
  export class ENModule { }