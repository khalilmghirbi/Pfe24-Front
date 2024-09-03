import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  dataArray:any=[]
  //dataArray:any
  dataHotel={
    hotel_name:'',
    hotel_stars:0,
    hotel_link:'',
    hotel_singleroom:0,
    hotel_doubleroom:0,
    hotel_address:'',
    hotel_id:0,
  }

  messageSuccess=''


  constructor(private ds:DataService ,private route:Router) { 
   this.ds.getAllhotels().subscribe(data=>this.dataArray=data)
   //this.ds.getAlldossiers().subscribe(data=>this.dataArray=data) 

   }

  ngOnInit(): void {
  }

  delete(id:any,i:number){
    this.ds.deleteHotel(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)
    })
  }


  getdata(hotel_name:string,hotel_stars:number,hotel_link:string,hotel_singleroom:number,hotel_doubleroom:number,hotel_address:string,hotel_id:any){
    this.messageSuccess=''
    this.dataHotel.hotel_name=hotel_name
    this.dataHotel.hotel_stars=hotel_stars
    this.dataHotel.hotel_link=hotel_link
    this.dataHotel.hotel_singleroom=hotel_singleroom
    this.dataHotel.hotel_doubleroom=hotel_doubleroom
    this.dataHotel.hotel_address=hotel_address
    this.dataHotel.hotel_id=hotel_id
    console.log(this.dataHotel)

  }


 updatenewhotel(f:any){
    let data=f.value
    this.ds.updateHotel(this.dataHotel.hotel_id,data).subscribe(response=>
      {
      console.log(response)
        let indexId=this.dataArray.findIndex((obj:any)=>obj.hotel_id==this.dataHotel.hotel_id)
       
        this.dataArray[indexId].hotel_name=data.hotel_name
        this.dataArray[indexId].hotel_stars=data.hotel_stars
        this.dataArray[indexId].hotel_link=data.hotel_link
        this.dataArray[indexId].hotel_singleroom=data.hotel_singleroom
        this.dataArray[indexId].hotel_doubleroom=data.hotel_doubleroom
        this.dataArray[indexId].hotel_address=data.hotel_address  
        this.dataArray[indexId].hotel_id=data.hotel_id


        this.messageSuccess=`this hotel ${this.dataArray[indexId].hotel_name} is updated`


      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  }
















}
