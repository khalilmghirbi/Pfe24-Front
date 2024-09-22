import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Media } from 'src/app/models/Media';
import { DataService } from 'src/app/views/services/data.service';
import { SelectedHospitalService } from 'src/app/views/services/selected-hospital.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  dataArray: Media[] = [];
  
  constructor(private selectedHospitalService:SelectedHospitalService,
    private ds:DataService ,private route:Router, private activatedRoute:ActivatedRoute) { }
  selectedHospital:any;

  ngOnInit(): void {
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
    // this.selectedHospital=this.selectedHospitalService.getSelectedClinic();
    // // console.log("ahouwa : ",this.selectedHospital.hopital_id)
    // this.ds.getMediaByHopitalId(this.selectedHospital.hopital_id).subscribe(
    //   (data: Media[])=>{
    //     this.dataArray = data
    //     //.filter((media: Media) => media.hopital_id === this.selectedHospital.hopital_id);
    //     console.log("this is all the media received",data)
    //   },
    //   (error) => {
    //     console.error('Error fetching media:', error);
    //   }
    
    // )

    this.activatedRoute.parent?.paramMap.pipe(
      map(params => params.get('id')),
      switchMap((id) => this.ds.getMediaByHopitalId(id))
   ).subscribe(
    (data: Media[])=>{
      this.dataArray = data
      //.filter((media: Media) => media.hopital_id === this.selectedHospital.hopital_id);
      console.log("this is all the media received",data)
    },
    (error) => {
      console.error('Error fetching media:', error);
    }
   )
  }

  delete(id:any,i:number){
    this.ds.deleteMedia(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)
    })
  }

}


 