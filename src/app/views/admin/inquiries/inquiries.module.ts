import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InquiriesRoutingModule } from './inquiries-routing.module';
import { InquiriesComponent } from './inquiries/inquiries.component';


@NgModule({
  declarations: [
    InquiriesComponent
  ],
  imports: [
    CommonModule,
    InquiriesRoutingModule
  ]
})
export class InquiriesModule { }
