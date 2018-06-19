import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CHProductComponent } from './product/product.component';
import { CHKernelComponent } from './kernel/kernel.component';
import { CHChainComponent } from './chain/chain.component';
import { CHAirdropComponent } from './airdrop/airdrop.component'
import { CHConceptComponent } from './concept/concept.component'
import { CHCompPublicAirdropComponent } from './public-airdrop/public-airdrop.computer.component'

@NgModule({
    declarations: [
        CHProductComponent,
        CHKernelComponent,
        CHChainComponent,
        CHAirdropComponent,
        CHConceptComponent,
        CHCompPublicAirdropComponent,
    ],
    exports: [
        CHProductComponent,
        CHKernelComponent,
        CHChainComponent,
        CHAirdropComponent,
        CHConceptComponent,
        CHCompPublicAirdropComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})

export class CHComputerModule { }