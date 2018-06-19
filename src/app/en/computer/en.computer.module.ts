import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ENProductComponent } from './product/product.component';
import { ENKernelComponent } from './kernel/kernel.component';
import { ENChainComponent } from './chain/chain.component';
import { ENAirdropComponent } from './airdrop/airdrop.component'
import { ENConceptComponent } from './concept/concept.component'
import { ENCompPublicAirdropComponent } from './public-airdrop/public-airdrop.computer.component'

@NgModule({
    declarations: [
        ENProductComponent,
        ENKernelComponent,
        ENChainComponent,
        ENAirdropComponent,
        ENConceptComponent,
        ENCompPublicAirdropComponent,
    ],
    exports: [
        ENProductComponent,
        ENKernelComponent,
        ENChainComponent,
        ENAirdropComponent,
        ENConceptComponent,
        ENCompPublicAirdropComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})

export class ENComputerModule { }