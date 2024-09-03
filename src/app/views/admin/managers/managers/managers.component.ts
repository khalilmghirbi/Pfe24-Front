import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {
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


  constructor(private ds:DataService ,private route:Router) { 
    this.ds.getAllmanagers().subscribe(data=>this.dataArray=data)
  }

  ngOnInit(): void {
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
