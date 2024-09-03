import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-addtreatment',
  templateUrl: './addtreatment.component.html',
  styleUrls: ['./addtreatment.component.css']
})
export class AddtreatmentComponent implements OnInit {

  constructor(private ds:DataService, private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    console.log(data)
    //this.ds.addHotel(data).subscribe(data=>console.log(data))
    this.ds.addTreatment(data).subscribe(data=>{
      this.route.navigate(['/admin/treatments'])
    })
  }


}
