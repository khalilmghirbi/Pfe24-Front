import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatmentsRoutingModule } from './treatments-routing.module';
import { TreatmentsComponent } from './treatments/treatments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TreatmentsComponent
  ],
  imports: [
    CommonModule,
    TreatmentsRoutingModule,
    FormsModule
  ]
})
export class TreatmentsModule { }
