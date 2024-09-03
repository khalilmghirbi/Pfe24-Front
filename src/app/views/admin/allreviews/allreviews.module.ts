import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllreviewsRoutingModule } from './allreviews-routing.module';
import { AllreviewsComponent } from './allreviews/allreviews.component';


@NgModule({
  declarations: [
    AllreviewsComponent
  ],
  imports: [
    CommonModule,
    AllreviewsRoutingModule
  ]
})
export class AllreviewsModule { }
