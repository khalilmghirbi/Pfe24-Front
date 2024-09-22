import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';HopitalManager
import { HopitalManager } from 'src/app/models/Manager';
import { SelectedHospitalService } from 'src/app/views/services/selected-hospital.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-case-managers',
  templateUrl: './case-managers.component.html',
  styleUrls: ['./case-managers.component.css']
})
export class CaseManagersComponent implements OnInit {
  dataArray:any=[]

  dataManager={
    hopital_id:0,
     hopitalmanager_fullname:'',
     hopitalmanager_phone:'',
     hopitalmanager_email:'',
     hopitalmanager_photo:'',
     hopitalmanager_countries:'',
     hopitalmanager_id:0,
     //hopitalmanager_deleted:
  }

  messageSuccess=''
  selectedHospital:any;


  constructor(private selectedHospitalService:SelectedHospitalService,
    private ds:DataService ,private route:Router, private activatedRoute:ActivatedRoute) { 
    //this.ds.getAllmanagers().subscribe(data=>this.dataArray=data)
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
    // this.selectedHospital=this.selectedHospitalService.getSelectedClinic();
    // console.log('hadha el id : ',this.selectedHospital.hopital_id)
    // this.ds.getManagersByHopitalId(this.selectedHospital.hopital_id).subscribe(
    //   (data: HopitalManager[])=>{
    //     console.log("hadhi il data lkollllllllll,",data)
    //     this.dataArray = data
    //     //.filter((manager) => manager.hopital_id === this.selectedHospital.hopital_id);
    //     console.log("this is all the case-managers received",data)
    //   },
    //   (error) => {
    //     console.error('Error fetching case-managers:', error);
    //   }
    
    // )

        this.activatedRoute.parent?.paramMap.pipe(
       map(params => params.get('id')),
       switchMap((id) => this.ds.getManagersByHopitalId(id))
    ).subscribe(
      (data: HopitalManager[])=>{
        console.log("hadhi il data lkollllllllll,",data)
        this.dataArray = data
        //.filter((manager) => manager.hopital_id === this.selectedHospital.hopital_id);
        console.log("this is all the case-managers received",data)
      },
      (error) => {
        console.error('Error fetching case-managers:', error);
      }
    )
  }

  getdata(hopital_id:number,hopitalmanager_fullname:string,hopitalmanager_phone:string,hopitalmanager_email:string,hopitalmanager_photo:string,hopitalmanager_countries:string,hopitalmanager_id:any){
    this.messageSuccess=''
    this.dataManager.hopital_id=hopital_id
    this.dataManager.hopitalmanager_fullname=hopitalmanager_fullname
    this.dataManager.hopitalmanager_phone=hopitalmanager_phone
    this.dataManager.hopitalmanager_email=hopitalmanager_email
    this.dataManager.hopitalmanager_photo=hopitalmanager_photo
    this.dataManager.hopitalmanager_countries=hopitalmanager_countries
    this.dataManager.hopitalmanager_id=hopitalmanager_id
    console.log(this.dataManager)

  }


 updatenewmanager(f:any){
    let data=f.value
    this.ds.updateHotel(this.dataManager.hopitalmanager_id,data).subscribe(response=>
      {
      console.log(response)
        let indexId=this.dataArray.findIndex((obj:any)=>obj.hopitalmanager_id==this.dataManager.hopitalmanager_id)
       
        this.dataArray[indexId].hopital_id=data.hopital_id
        this.dataArray[indexId].hopitalmanager_fullname=data.hopitalmanager_fullname
        this.dataArray[indexId].hopitalmanager_phone=data.hopitalmanager_phone
        this.dataArray[indexId].hopitalmanager_email=data.hopitalmanager_email
        this.dataArray[indexId].hopitalmanager_photo=data.hopitalmanager_photo
        this.dataArray[indexId].hopitalmanager_countries=data.hopitalmanager_countries  
        this.dataArray[indexId].hopitalmanager_id=data.hopitalmanager_id


        this.messageSuccess=`this manager ${this.dataArray[indexId].hopitalmanager_fullname} is updated`


      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  }








}


 