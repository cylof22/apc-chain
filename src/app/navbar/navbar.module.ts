import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
],
imports: [
    RouterModule,
  ],
})
export class NavbarModule { }
