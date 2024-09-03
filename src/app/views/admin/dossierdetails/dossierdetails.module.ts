import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DossierdetailsRoutingModule } from './dossierdetails-routing.module';
import { DossierdetailsComponent } from './dossierdetails.component';


@NgModule({
  declarations: [
    DossierdetailsComponent
  ],
  imports: [
    CommonModule,
    DossierdetailsRoutingModule
  ]
})
export class DossierdetailsModule { }
