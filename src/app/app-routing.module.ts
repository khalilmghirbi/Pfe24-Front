import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { GuardadminGuard } from './views/guards/guardadmin.guard';
import { ClinicProfileComponent } from './views/admin/clinics/clinics/clinic-profile/clinic-profile.component';

const routes: Routes = [
  {path:'',component:FrontLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule)},
  ]},
  {path:'admin',component:AdminLayoutComponent,canActivate:[GuardadminGuard],children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'inquiries',loadChildren:()=>import('./views/admin/inquiries/inquiries.module').then(m=>m.InquiriesModule)},
    {path:'messages',loadChildren:()=>import('./views/admin/messages/messages.module').then(m=>m.MessagesModule)},
    {path:'reviews',loadChildren:()=>import('./views/admin/reviews/reviews.module').then(m=>m.ReviewsModule)},
    {path:'users',loadChildren:()=>import('./views/admin/users/users.module').then(m=>m.UsersModule)},
    {path:'clinics',loadChildren:()=>import('./views/admin/clinics/clinics.module').then(m=>m.ClinicsModule)},
    //{ path: 'clinics/profile/:id', component: ClinicProfileComponent }, // Add the route for ClinicProfileComponent with an ID parameter
    {path:'hotels',loadChildren:()=>import('./views/admin/hotels/hotels.module').then(m=>m.HotelsModule)},
    {path:'doctors',loadChildren:()=>import('./views/admin/doctors/doctors.module').then(m=>m.DoctorsModule)},
    {path:'managers',loadChildren:()=>import('./views/admin/managers/managers.module').then(m=>m.ManagersModule)},
    {path:'contact',loadChildren:()=>import('./views/admin/contact/contact.module').then(m=>m.ContactModule)},
    {path:'treatments',loadChildren:()=>import('./views/admin/treatments/treatments.module').then(m=>m.TreatmentsModule)},
    {path:'photos',loadChildren:()=>import('./views/admin/media/media.module').then(m=>m.MediaModule)},
    {path:'allreviews',loadChildren:()=>import('./views/admin/allreviews/allreviews.module').then(m=>m.AllreviewsModule)},
    {path:'rdvsbydossierid/:id',loadChildren:()=>import('./views/admin/rdv/rdv.module').then(m=>m.RDVModule)},
    {path:'quotations',loadChildren:()=>import('./views/admin/quotations/quotations.module').then(m=>m.QuotationsModule)},
    {path:'addhotel',loadChildren:()=>import('./views/admin/addhotel/addhotel.module').then(m=>m.AddhotelModule)},
    {path:'adddoctor',loadChildren:()=>import('./views/admin/adddoctor/adddoctor.module').then(m=>m.AdddoctorModule)},
    {path:'addmanager',loadChildren:()=>import('./views/admin/addmanager/addmanager.module').then(m=>m.AddmanagerModule)},
    {path:'addcontact',loadChildren:()=>import('./views/admin/addcontact/addcontact.module').then(m=>m.AddcontactModule)},
    {path:'addtreatment',loadChildren:()=>import('./views/admin/addtreatment/addtreatment.module').then(m=>m.AddtreatmentModule)},
    {path:'dossierdetails/:id',loadChildren:()=>import('./views/admin/dossierdetails/dossierdetails.module').then(m=>m.DossierdetailsModule)},
    {path:'loginadmin',loadChildren:()=>import('./views/admin/loginadmin/loginadmin.module').then(m=>m.LoginadminModule)}
    
  ]},
  {path:'admin/login',component:AuthAdminLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
