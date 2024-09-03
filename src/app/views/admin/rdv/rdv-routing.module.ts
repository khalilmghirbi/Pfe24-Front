import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RDVComponent } from './rdv/rdv.component';

const routes: Routes = [
  {path:'',component:RDVComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RDVRoutingModule { }
