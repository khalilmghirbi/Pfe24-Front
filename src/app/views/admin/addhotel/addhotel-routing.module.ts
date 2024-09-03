import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhotelComponent } from './addhotel/addhotel.component';

const routes: Routes = [
  {path:'',component:AddhotelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddhotelRoutingModule { }
