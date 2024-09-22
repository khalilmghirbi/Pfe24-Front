import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { Hopital} from 'src/app/models/Hopital';
import { DataService } from 'src/app/views/services/data.service';
import { SelectedHospitalService } from 'src/app/views/services/selected-hospital.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-clinic-profile',
  templateUrl: './clinic-profile.component.html',
  styleUrls: ['./clinic-profile.component.css']
})
export class ClinicProfileComponent implements OnInit {
  
  dataArray:any=[]
  selectedHospital:any;

  

  constructor(private activatedRoute: ActivatedRoute, private selectedHospitalService:SelectedHospitalService,private ds:DataService ,private route:Router) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => {
    //   this.selectedHospital = params['id']; // 'id' is the name of the route parameter
    //   console.log(this.selectedHospital);
    // });
    // // this.selectedHospital = this.selectedHospitalService.getSelectedClinic();
    // // console.log('hadha el id : ', this.selectedHospital.hopital_id);
    
    // this.ds.getProfilByHopitalId(this.selectedHospital.hopital_id).subscribe(
    //   (data: Hopital[]) => {
    //     console.log("Données reçues : ", data);
        
    //     // Filtrage des données en fonction de l'ID de l'hôpital sélectionné
    //     this.dataArray = data
    //     //.filter((profil) => profil.hopital_id === this.selectedHospital.hopital_id);
        
    //     console.log("Données filtrées : ", this.dataArray);
    //   },
    //   (error) => {
    //     console.error('Erreur lors de la récupération des informations de l\'hôpital :', error);
    //   }
    // );

    // this.selectedHospital = this.selectedHospitalService.getSelectedClinic();
    this.activatedRoute.parent?.paramMap.pipe(
      map(params => params.get('id')),
      switchMap((id) => this.ds.getHospitalsById(id))
   ).subscribe(
     (data: any[]) => {
       this.selectedHospital = data[0];
       console.log("Données reçues amine : ", this.selectedHospital);
     },
     (error) => {
       console.error('Erreur lors de la récupération des informations de l\'hôpital :', error);
     }
   )

    this.activatedRoute.parent?.paramMap.pipe(
       map(params => params.get('id')),
       switchMap((id) => this.ds.getProfilByHopitalId(id))
    ).subscribe(
      (data: Hopital[]) => {
        console.log("Données reçues : ", data);
        
        // Filtrage des données en fonction de l'ID de l'hôpital sélectionné
        this.dataArray = data
        //.filter((profil) => profil.hopital_id === this.selectedHospital.hopital_id);
        
        console.log("Données filtrées : ", this.dataArray);
      },
      (error) => {
        console.error('Erreur lors de la récupération des informations de l\'hôpital :', error);
      }
    )
  }
/*
    const hospitalId = this.activatedRoute.snapshot.paramMap.get('id');
if (hospitalId === null) {
  console.error('No hospital ID found in the route');
  return; // Handle this case appropriately
}

console.log('Route hospital ID:', hospitalId);

// Proceed with your logic since hospitalId is now guaranteed to be a string
this.selectedHospital = this.selectedHospitalService.getSelectedClinic();
console.log('Selected clinic from service:', this.selectedHospital);

this.ds.getAllhopitalinfo().subscribe(
  (data: Hopital[]) => {
    console.log("Data received: ", data);

    // Filter the data based on the hospital ID from the route
    this.dataArray = data.filter(profil => profil.hopital_id === +hospitalId);
    console.log("Filtered data: ", this.dataArray);
  },
  (error) => {
    console.error('Error fetching hospital information:', error);
  }
);*/

  


}

