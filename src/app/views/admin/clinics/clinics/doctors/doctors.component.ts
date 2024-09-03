import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { SelectedHospitalService } from 'src/app/views/services/selected-hospital.service';
import { HopitalMedecin  } from 'src/app/models/medecin';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  dataArray:any=[]

  dataMedecin={
        hopitalmedecins_id:0,
        hopital_id:0,
        hopitalmedecins_fullname:'',
        hopitalmedecins_phone:'',
        hopitalmedecins_description:'',
        hopitalmedecins_photo:'',
        hopitalmedecins_langs:'',
        hopitalmedecins_status:0,
        hopitalmedecins_cvfile:'',
        procedure_name:''
  }

  messageSuccess=''
  selectedHospital:any;

  constructor(private selectedHospitalService:SelectedHospitalService,private ds:DataService ,private route:Router) {
    //this.ds.getAlldoctors().subscribe(data=>this.dataArray=data)
   }

  ngOnInit(): void {
    this.selectedHospital=this.selectedHospitalService.getSelectedClinic();
    console.log('hadha el id : ',this.selectedHospital.hopital_id)
    this.ds.getAlldoctors().subscribe(
      (data: HopitalMedecin[])=>{
        console.log("hadhi il data lkollllllllll,",data)
        this.dataArray = data.filter((medecin) => medecin.hopital_id === this.selectedHospital.hopital_id);
        console.log("this is all the medecin received",this.dataArray)
      },
      (error) => {
        console.error('Error fetching medecin:', error);
      }
    
    )
  }

  delete(id:any,i:number){
    this.ds.deleteDoctor(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)
    })
  }



  getdata(hopitalmedecins_fullname:string,hopitalmedecins_phone:string,hopitalmedecins_photo:string,hopitalmedecins_langs:string,hopitalmedecins_cvfile:string,procedure_name:string,hopitalmedecins_id:any){
    this.messageSuccess=''
    this.dataMedecin.hopitalmedecins_fullname=hopitalmedecins_fullname
    this.dataMedecin.hopitalmedecins_phone=hopitalmedecins_phone
    this.dataMedecin.hopitalmedecins_photo=hopitalmedecins_photo
    this.dataMedecin.hopitalmedecins_langs=hopitalmedecins_langs
    this.dataMedecin.hopitalmedecins_cvfile=hopitalmedecins_cvfile
    this.dataMedecin.procedure_name=procedure_name
    this.dataMedecin.hopitalmedecins_id=hopitalmedecins_id
    console.log(this.dataMedecin)

  }


 updatenewdoctor(f:any){
    let data=f.value
    this.ds.updateDoctor(this.dataMedecin.hopitalmedecins_id,data).subscribe(response=>
      {
      console.log(response)
        let indexId=this.dataArray.findIndex((obj:any)=>obj.hotel_id==this.dataMedecin.hopitalmedecins_id)
       
        this.dataArray[indexId].hopitalmedecins_fullname=data.hopitalmedecins_fullname
        this.dataArray[indexId].hopitalmedecins_phone=data.hopitalmedecins_phone
        this.dataArray[indexId].hopitalmedecins_photo=data.hopitalmedecins_photo
        this.dataArray[indexId].hopitalmedecins_langs=data.hopitalmedecins_langs
        this.dataArray[indexId].hopitalmedecins_cvfile=data.hopitalmedecins_cvfile
        this.dataArray[indexId].procedure_name=data.procedure_name  
        this.dataArray[indexId].hopitalmedecins_id=data.hopitalmedecins_id


        this.messageSuccess=`this doctor ${this.dataArray[indexId].hopitalmedecins_fullname} is updated`


      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  }







}
