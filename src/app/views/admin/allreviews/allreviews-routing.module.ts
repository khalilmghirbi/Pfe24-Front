import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllreviewsComponent } from './allreviews/allreviews.component';

const routes: Routes = [
  {path:'',component:AllreviewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllreviewsRoutingModule { }
