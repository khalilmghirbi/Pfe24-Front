import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationsRoutingModule } from './quotations-routing.module';
import { QuotationsComponent } from './quotations/quotations.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuotationsComponent
  ],
  imports: [
    CommonModule,
    QuotationsRoutingModule,
    FormsModule
  ]
})
export class QuotationsModule { }
