import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataArray:any=[]
  dataUser={
  hopitalmanager_fullname:'',
  hopitalmanager_email:'',
  hopitalmanager_phone:'',
  hopital_name:'',
  hopitalmanager_countries:'',
  hopitalmanager_id:0,
  }

  messageSuccess=''

  constructor(private ds:DataService ,private route:Router) {
    this.ds.getAllusers().subscribe(data=>{
      this.dataArray=data
      console.log(this.dataArray)
    })
   }

  ngOnInit(): void {
  }

  delete(id:any,i:number){
    this.ds.deleteUser(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)
    })
  }

  getdata(hopitalmanager_fullname:string,hopitalmanager_email:string,hopitalmanager_phone:string,hopital_name:string,hopitalmanager_countries:string,hopitalmanager_id:any){
    this.messageSuccess=''
    this.dataUser.hopitalmanager_fullname=hopitalmanager_fullname
    this.dataUser.hopitalmanager_email=hopitalmanager_email
    this.dataUser.hopitalmanager_phone=hopitalmanager_phone
    this.dataUser.hopital_name=hopital_name
    this.dataUser.hopitalmanager_countries=hopitalmanager_countries
    this.dataUser.hopitalmanager_id=hopitalmanager_id
    console.log(this.dataUser)

  }

  updatenewmanagerUs(f:any){
    let data=f.value
    this.ds.updateUser(this.dataUser.hopitalmanager_id,data).subscribe(response=>
      {
      console.log(response)
        let indexId=this.dataArray.findIndex((obj:any)=>obj.hopitalmanager_id==this.dataUser.hopitalmanager_id)
       
        this.dataArray[indexId].hopitalmanager_fullname=data.hopitalmanager_fullname
        this.dataArray[indexId].hopitalmanager_email=data.hopitalmanager_email
        this.dataArray[indexId].hopitalmanager_phone=data.hopitalmanager_phone
        this.dataArray[indexId].hopital_name=data.hopital_name 
        this.dataArray[indexId].hopitalmanager_countries=data.hopitalmanager_countries
        this.dataArray[indexId].hopitalmanager_id=data.hopitalmanager_id


        this.messageSuccess=`this manager ${this.dataArray[indexId].hopitalmanager_fullname} is updated`


      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  }


}
