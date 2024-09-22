import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { HopitalContact } from 'src/app/models/Contact';
import { SelectedHospitalService } from 'src/app/views/services/selected-hospital.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  dataArray:any=[]
  dataContact={
    hopitalcontacts_fullname:'',
    hopitalcontacts_email:'',
    hopitalcontacts_id:''
  }
  messageSuccess=''
  selectedHospital:any;

  constructor(private selectedHospitalService:SelectedHospitalService,private ds:DataService ,private route:Router, private activatedRoute:ActivatedRoute) { 
    //this.ds.getAllcontacts().subscribe(data=>this.dataArray=data)
  }

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

   this.activatedRoute.parent?.paramMap.pipe(
    map(params => params.get('id')),
    switchMap((id) => this.ds.getContactsByHopitalId(id))
 ).subscribe(
  (data: HopitalContact[])=>{
    console.log("hadhi il data lkollllllllll,",data)
    this.dataArray = data
    //.filter((contact) => contact.hopital_id === this.selectedHospital.hopital_id);
    console.log("this is all the contacts received",data)
  },
  (error) => {
    console.error('Error fetching contacts:', error);
  }

 )
    // this.selectedHospital=this.selectedHospitalService.getSelectedClinic();
    // console.log('hadha el id : ',this.selectedHospital.hopital_id)
    // this.ds.getContactsByHopitalId(this.selectedHospital.hopital_id).subscribe(
    //   (data: HopitalContact[])=>{
    //     console.log("hadhi il data lkollllllllll,",data)
    //     this.dataArray = data
    //     //.filter((contact) => contact.hopital_id === this.selectedHospital.hopital_id);
    //     console.log("this is all the contacts received",data)
    //   },
    //   (error) => {
    //     console.error('Error fetching contacts:', error);
    //   }
    
    // )
  }

  delete(id:any,i:number){
    this.ds.deleteContact(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)
    })
  }

  
  getdata(hopitalcontacts_fullname:string,hopitalcontacts_email:string,hopitalcontacts_id:any){
    this.messageSuccess=''
    this.dataContact.hopitalcontacts_fullname=hopitalcontacts_fullname
    this.dataContact.hopitalcontacts_email=hopitalcontacts_email
    this.dataContact.hopitalcontacts_id=hopitalcontacts_id
    console.log(this.dataContact)

  }

  updatenewcontact(f:any){
    let data=f.value
    this.ds.updateContact(this.dataContact.hopitalcontacts_id,data).subscribe(response=>
      {
      console.log(response)
        let indexId=this.dataArray.findIndex((obj:any)=>obj.hopitalcontacts_id==this.dataContact.hopitalcontacts_id)
       
        this.dataArray[indexId].hopitalcontacts_fullname=data.hopitalcontacts_fullname
        this.dataArray[indexId].hopitalcontacts_email=data.hopitalcontacts_email
        this.dataArray[indexId].hopitalcontacts_id=data.hopitalcontacts_id


        this.messageSuccess=`this contact ${this.dataArray[indexId].hopitalcontacts_fullname} is updated`


      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  }








}
