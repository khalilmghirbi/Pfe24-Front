import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { DataService } from 'src/app/views/services/data.service';
import { SelectedHospitalService } from 'src/app/views/services/selected-hospital.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  username:any
  listOfCreatorClinics:any[]=[];
  creator:any;
  constructor(private selectedHospitalService:SelectedHospitalService,private ds:DataService ,private asd:AuthadminService, private route:Router) { 
   /*if(!localStorage.getItem('token')){
      this.route.navigate(['/admin/login'])
    }*/ //on a le remplacer dans le service authadminservice par  if(!token){return false}
    //this.username=this.asd.ProfilAdmin.username
    this.username=this.asd.getUsername()
    //console.log(this.asd.IsLoggedIn) mettre en cmtr le variable dans le service aussi authadminservice
    
   /* if(this.asd.LoggedIn()==true){
      console.log("connected")
    }else {
      //console.log("not connected")
      this.route.navigate(['/admin/login'])
    }*/
  }

  ngOnInit(): void {
    this.creator=localStorage.getItem('id_user');
    this.ds.getHospitalsByCreatorId(this.creator).subscribe(
      (data: any[]) => {
        this.listOfCreatorClinics = data;
        console.log("list of clicks:",this.listOfCreatorClinics)
      },
      (error) => {
        console.error('Error fetching hospitals:', error); // Log en cas d'erreur
      })
    }

    onClinicSelect(clinic: any): void {
      this.selectedHospitalService.setSelectedClinic(clinic);
      console.log('Selected clinic:', clinic);
      this.route.navigate(['/admin/clinics']);
    }

  logout(){
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }
}
