import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  dataArray:any=[]

  dataMedecin={
        hopitalmedecins_id:0,
      //  hopital_id": 1,
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

  constructor(private ds:DataService ,private route:Router) {
    this.ds.getAlldoctors().subscribe(data=>this.dataArray=data)
   }

  ngOnInit(): void {
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
