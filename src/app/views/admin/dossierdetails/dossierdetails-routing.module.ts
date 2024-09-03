import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DossierdetailsComponent } from './dossierdetails.component';

const routes: Routes = [
  {path:'',component:DossierdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DossierdetailsRoutingModule { }
