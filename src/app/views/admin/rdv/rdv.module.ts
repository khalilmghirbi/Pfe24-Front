import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RDVRoutingModule } from './rdv-routing.module';
import { RDVComponent } from './rdv/rdv.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RDVComponent
  ],
  imports: [
    CommonModule,
    RDVRoutingModule,
    FormsModule
  ]
})
export class RDVModule { }
