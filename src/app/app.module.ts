import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from "@angular/common";

import { HTTPService } from './service/http.service'
import { AppComponent } from './app.component';

import { CHModule } from './ch/ch.module'
import { CHMainComponent } from './ch/main/main.component'

import { ENModule } from './en/en.module'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CHModule,
    ENModule,
    RouterModule.forRoot([
      {path: '', component: CHMainComponent},
    ]),
  ],
  providers: [
    HTTPService,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
