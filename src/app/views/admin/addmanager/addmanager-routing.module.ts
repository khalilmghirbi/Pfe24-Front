import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmanagerComponent } from './addmanager/addmanager.component';

const routes: Routes = [
  {path:'',component:AddmanagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddmanagerRoutingModule { }
