import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CHMobileProductComponent } from './product/product.component';
import { CHMobileKernelComponent } from './kernel/kernel.component';
import { CHMobileChainComponent } from './chain/chain.component';
import { CHMobileAirdropComponent } from './airdrop/airdrop.component'
import { CHMobileConceptComponent } from './concept/concept.component'
import { CHMobilePublicAirdropComponent } from './public-airdrop/public-airdrop.mobile.component'

@NgModule({
    declarations: [
        CHMobileProductComponent,
        CHMobileKernelComponent,
        CHMobileChainComponent,
        CHMobileAirdropComponent,
        CHMobileConceptComponent,
        CHMobilePublicAirdropComponent,
    ],
    exports: [
        CHMobileProductComponent,
        CHMobileKernelComponent,
        CHMobileChainComponent,
        CHMobileAirdropComponent,
        CHMobileConceptComponent,
        CHMobilePublicAirdropComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})

export class CHMobileModule { }