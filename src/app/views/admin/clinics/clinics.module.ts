import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

import { ClinicsRoutingModule } from './clinics-routing.module';
import { ClinicsComponent } from './clinics/clinics.component';
import { ClinicProfileComponent } from './clinics/clinic-profile/clinic-profile.component';
import { MediaComponent } from './clinics/media/media.component';
import { TreatmentsComponent } from './clinics/treatments/treatments.component';
import { DoctorsComponent } from './clinics/doctors/doctors.component';
import { NotificationsComponent } from './clinics/notifications/notifications.component';
import { CaseManagersComponent } from './clinics/case-managers/case-managers.component';
import { HotelsComponent } from './clinics/hotels/hotels.component';
import { ReviewsComponent } from './clinics/reviews/reviews.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClinicsComponent,
    ClinicProfileComponent,
    MediaComponent,
    TreatmentsComponent,
    DoctorsComponent,
    NotificationsComponent,
    CaseManagersComponent,
    HotelsComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    ClinicsRoutingModule,
    MenubarModule,
    FormsModule
  ]
})
export class ClinicsModule { }
