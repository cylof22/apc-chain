import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { NavbarComponent } from './navbar/navbar.component';

import { AppComponent } from './app.component';

import { CHMainComponent } from './ch/main/main.component';
import { CHFooterComponent } from './ch/footer/footer.component';
import { CHHomeComponent } from './ch/home/home.component';
import { CHProductComponent } from './ch/product/product.component';
import { CHKernelComponent } from './ch/kernel/kernel.component';
import { CHChainComponent } from './ch/chain/chain.component';
import { CHContactComponent } from './ch/contact/contact.component';

import { ENMainComponent } from './en/main/main.component';
import { ENFooterComponent } from './en/footer/footer.component';
import { ENHomeComponent } from './en/home/home.component';
import { ENProductComponent } from './en/product/product.component';
import { ENKernelComponent } from './en/kernel/kernel.component';
import { ENChainComponent } from './en/chain/chain.component';
import { ENContactComponent } from './en/contact/contact.component';


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
    ENMainComponent,
    ENFooterComponent,
    ENHomeComponent,
    ENProductComponent,
    ENKernelComponent,
    ENChainComponent,
    ENContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: CHMainComponent},
    ]),
    RouterModule.forChild([
      {path: 'en', component: ENMainComponent},
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
