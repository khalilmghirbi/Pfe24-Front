import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdddoctorRoutingModule } from './adddoctor-routing.module';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdddoctorComponent
  ],
  imports: [
    CommonModule,
    AdddoctorRoutingModule,
    FormsModule
  ]
})
export class AdddoctorModule { }
