import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  dataArray:any=[]
  dataContact={
    hopitalcontacts_fullname:'',
    hopitalcontacts_email:'',
    hopitalcontacts_id:''
  }
  messageSuccess=''

  constructor(private ds:DataService ,private route:Router) { 
    this.ds.getAllcontacts().subscribe(data=>this.dataArray=data)
  }

  ngOnInit(): void {
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
