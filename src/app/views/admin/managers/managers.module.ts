import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';
import { ManagersComponent } from './managers/managers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManagersComponent
  ],
  imports: [
    CommonModule,
    ManagersRoutingModule,
    FormsModule
  ]
})
export class ManagersModule { }
