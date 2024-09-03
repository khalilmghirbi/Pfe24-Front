import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtreatmentComponent } from './addtreatment/addtreatment.component';

const routes: Routes = [
  {path:'',component:AddtreatmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddtreatmentRoutingModule { }
