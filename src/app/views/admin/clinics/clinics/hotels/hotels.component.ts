import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { SelectedHospitalService } from 'src/app/views/services/selected-hospital.service';
import { HopitalHotel } from 'src/app/models/Hotel';
import { map, switchMap } from 'rxjs/operators';


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

  selectedHospital:any;


  constructor(private selectedHospitalService:SelectedHospitalService,
    private ds:DataService ,private route:Router, public activatedRoute:ActivatedRoute) { 
   //this.ds.getAllhotels().subscribe(data=>this.dataArray=data)
   //this.ds.getAlldossiers().subscribe(data=>this.dataArray=data) 

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

    this.activatedRoute.parent?.paramMap.pipe(
      map(params => params.get('id')),
      switchMap((id) => this.ds.getHotelsByHopitalId(id))
   ).subscribe(
    (data: HopitalHotel[])=>{
      console.log("hadhi il data lkollllllllll,",data)
      this.dataArray = data
      //.filter((hotel) => hotel.hotel_hopitalid === this.selectedHospital.hopital_id);
      console.log("this is all the Reviews received",data)
    },
    (error) => {
      console.error('Error fetching Reviews:', error);
    }
   )
    
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


 