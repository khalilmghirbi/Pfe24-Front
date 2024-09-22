import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicProfileComponent } from './clinics/clinic-profile/clinic-profile.component';
import { CaseManagersComponent } from './clinics/case-managers/case-managers.component';
import { MediaComponent } from './clinics/media/media.component';
import { ReviewsComponent } from './clinics/reviews/reviews.component';
import { NotificationsComponent } from './clinics/notifications/notifications.component';
import { TreatmentsComponent } from './clinics/treatments/treatments.component';
import { DoctorsComponent } from './clinics/doctors/doctors.component';
import { HotelsComponent } from './clinics/hotels/hotels.component';

const routes: Routes = [
  { path:':id',
    component:ClinicsComponent,
    children:[
      {
        path: '', // Default child route
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path:'profile',
        component:ClinicProfileComponent
      },
      {
        path:'caseManagers',
        component:CaseManagersComponent
      },
      {
        path:'media',
        component:MediaComponent
      },
      {
        path:'reviews',
        component:ReviewsComponent
      },
      {
        path:'notifications',
        component:NotificationsComponent
      },
      {
        path:'treatments',
        component:TreatmentsComponent
      },
      {
        path:'doctors',
        component:DoctorsComponent
      },
      {
        path:'hotels',
        component:HotelsComponent
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicsRoutingModule { }
