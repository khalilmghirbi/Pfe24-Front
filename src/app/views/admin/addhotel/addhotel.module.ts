import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddhotelRoutingModule } from './addhotel-routing.module';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddhotelComponent
  ],
  imports: [
    CommonModule,
    AddhotelRoutingModule,
    FormsModule
  ]
})
export class AddhotelModule { }
