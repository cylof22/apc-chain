import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

import { NavbarComponent } from './navbar/navbar.component';
import { HTTPService } from './service/http.service'

import { AppComponent } from './app.component';

import { CHMainComponent } from './ch/main/main.component';
import { CHFooterComponent } from './ch/footer/footer.component';
import { CHHomeComponent } from './ch/home/home.component';
import { CHProductComponent } from './ch/product/product.component';
import { CHKernelComponent } from './ch/kernel/kernel.component';
import { CHChainComponent } from './ch/chain/chain.component';
import { CHContactComponent } from './ch/contact/contact.component';
import { CHAirdropComponent } from './ch/airdrop/airdrop.component'
import { CHUploadComponent } from './ch/upload/upload.component'
import { CHConceptComponent } from './ch/concept/concept.component'
import { CHPublicAirdropComponent } from './ch/public-airdrop/public-airdrop.component'

import { ENMainComponent } from './en/main/main.component';
import { ENFooterComponent } from './en/footer/footer.component';
import { ENHomeComponent } from './en/home/home.component';
import { ENProductComponent } from './en/product/product.component';
import { ENKernelComponent } from './en/kernel/kernel.component';
import { ENChainComponent } from './en/chain/chain.component';
import { ENContactComponent } from './en/contact/contact.component';
import { ENAirdropComponent } from './en/airdrop/airdrop.component';
import { ENUploadComponent } from './en/upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CHMainComponent,
    CHFooterComponent,
    CHHomeComponent,
    CHProductComponent,
    CHKernelComponent,
    CHChainComponent,
    CHContactComponent,
    CHAirdropComponent,
    CHUploadComponent,
    CHConceptComponent,
    CHPublicAirdropComponent,
    ENMainComponent,
    ENFooterComponent,
    ENHomeComponent,
    ENProductComponent,
    ENKernelComponent,
    ENChainComponent,
    ENContactComponent,
    ENAirdropComponent,
    ENUploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: CHMainComponent},
    ]),
    RouterModule.forChild([
      {path: 'en', component: ENMainComponent},
      {path: 'ch/airdrop', component: CHPublicAirdropComponent},
  ])
  ],
  providers: [
    HTTPService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
