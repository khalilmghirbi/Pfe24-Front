import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {

  constructor(private ds:DataService, private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    console.log(data)
    //this.ds.addHotel(data).subscribe(data=>console.log(data))
    this.ds.addDoctor(data).subscribe(data=>{
      this.route.navigate(['/admin/doctors'])
    })
  }

}
