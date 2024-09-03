import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  constructor(private ds:DataService, private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    console.log(data)
    //this.ds.addHotel(data).subscribe(data=>console.log(data))
    this.ds.addHotel(data).subscribe(data=>{
      this.route.navigate(['/admin/hotels'])
    })
  }

}
