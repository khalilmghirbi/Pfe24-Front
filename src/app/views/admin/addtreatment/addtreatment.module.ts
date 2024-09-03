import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtreatmentRoutingModule } from './addtreatment-routing.module';
import { AddtreatmentComponent } from './addtreatment/addtreatment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddtreatmentComponent
  ],
  imports: [
    CommonModule,
    AddtreatmentRoutingModule,
    FormsModule
  ]
})
export class AddtreatmentModule { }
