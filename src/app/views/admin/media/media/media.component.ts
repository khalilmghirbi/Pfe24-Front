import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  dataArray:any=[]

  
  constructor(private ds:DataService ,private route:Router) { 
    this.ds.getAllmedia().subscribe(data=>this.dataArray=data)
    //this.ds.getAlldossiers().subscribe(data=>this.dataArray=data) 
 
    }

  ngOnInit(): void {
  }

  delete(id:any,i:number){
    this.ds.deleteMedia(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)
    })
  }

}
