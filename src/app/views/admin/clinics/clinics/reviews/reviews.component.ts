import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hopital_avis } from 'src/app/models/Review';
import { DataService } from 'src/app/views/services/data.service';
import { SelectedHospitalService } from 'src/app/views/services/selected-hospital.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  dataArray:any=[]
  reviews: any[] = [];
  
  dataReview={
     hopitalavis_comment:'',
     procedure_name:'',
     hopitalavis_fullname:'',
     hopitalmanager_fullname:'',
     hopitalavis_date:new Date,
     hopitalavis_moyenne_rate:0,
     hopitalavis_translator_rate:0,
     hopitalavis_service_rate:0,
     hopitalavis_medecin_rate:0,
     hopitalavis_note:0,
     hopitalavis_reply:'',
     hopitalavis_reply_en:'',
     hopitalavis_id:0,
     hopitalavis_hopital_id:0
  }
  selectedHospital:any;

  constructor(private selectedHospitalService:SelectedHospitalService,private ds:DataService ,private route:Router) {}


  ngOnInit(): void {
    this.selectedHospital=this.selectedHospitalService.getSelectedClinic();
    console.log('hadha el id : ',this.selectedHospital.hopital_id)
    this.ds.getAllreviews().subscribe(
      (data: Hopital_avis[])=>{
        console.log("hadhi il data lkollllllllll,",data)
        this.dataArray = data.filter((review) => review.hopitalavis_hopital_id === this.selectedHospital.hopital_id);
        console.log("this is all the Reviews received",data)
      },
      (error) => {
        console.error('Error fetching Reviews:', error);
      }
    
    )
  }

  getdata(hopitalavis_fullname:string, hopitalmanager_fullname:string,
    hopitalavis_date:Date,hopitalavis_moyenne_rate:number,hopitalavis_translator_rate:number,hopitalavis_service_rate:number,hopitalavis_medecin_rate:number,hopitalavis_note:number,hopitalavis_reply_en:string,hopitalavis_id:number,hopitalavis_hopital_id:number){
      this.dataReview.hopitalavis_fullname=hopitalavis_fullname
      this.dataReview.hopitalmanager_fullname=hopitalmanager_fullname
      this.dataReview.hopitalavis_date=hopitalavis_date;
      this.dataReview.hopitalavis_moyenne_rate=hopitalavis_moyenne_rate
      this.dataReview.hopitalavis_translator_rate=hopitalavis_translator_rate
      this.dataReview.hopitalavis_service_rate=hopitalavis_service_rate
      this.dataReview.hopitalavis_medecin_rate=hopitalavis_medecin_rate
      this.dataReview.hopitalavis_note=hopitalavis_note
      this.dataReview.hopitalavis_reply_en=hopitalavis_reply_en
      this.dataReview.hopitalavis_id=hopitalavis_id
      this.dataReview.hopitalavis_hopital_id=hopitalavis_hopital_id
    }

    edit(id:any){
      console.log("edittt"); 
      console.log(id); 
      this.ds.getreview(id).subscribe((data:any)=>{
        console.log(data);
        this.dataReview.hopitalavis_comment=data.hopitalavis_comment
        this.dataReview.procedure_name=data.procedure_name
        this.dataReview.hopitalavis_fullname=data.hopitalavis_fullname
        this.dataReview.hopitalmanager_fullname=data.hopitalmanager_fullname
        this.dataReview.hopitalavis_date=data.hopitalavis_date;
        this.dataReview.hopitalavis_moyenne_rate=data.hopitalavis_moyenne_rate
        this.dataReview.hopitalavis_translator_rate=data.hopitalavis_translator_rate
        this.dataReview.hopitalavis_service_rate=data.hopitalavis_service_rate
        this.dataReview.hopitalavis_medecin_rate=data.hopitalavis_medecin_rate
        this.dataReview.hopitalavis_note=data.hopitalavis_note
        this.dataReview.hopitalavis_reply=data.hopitalavis_reply
        this.dataReview.hopitalavis_reply_en=data.hopitalavis_reply_en
        this.dataReview.hopitalavis_id=data.hopitalavis_id
        this.dataReview.hopitalavis_hopital_id=data.hopitalavis_hopital_id

        console.log(this.dataReview);
        
      })
    }
/*
    reply(rep:string){
      this.ds.replyto(this.dataReview.hopitalavis_id,{hopitalavis_reply:rep}).subscribe(data=>console.log(data))
    }*/

      reply(rep: string) {
        this.ds.replyto(this.dataReview.hopitalavis_id, { hopitalavis_reply: rep }).subscribe(
          data => {
            console.log('Reply submitted', data);
            this.refreshReviews(); // Méthode pour rafraîchir la liste des avis
            alert('Reply submitted successfully.');
          },
          error => console.error('Error submitting reply', error)
        );
      }
      
      refreshReviews() {
        // Appel du service pour récupérer les avis mis à jour
        this.ds.getAllreviews().subscribe(
          reviews => this.dataArray = reviews,
          error => console.error('Error fetching reviews', error)
        );


      
}

}
