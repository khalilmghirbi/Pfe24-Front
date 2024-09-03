import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  constructor(private ds:DataService, private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
    console.log(data)
    //this.ds.addHotel(data).subscribe(data=>console.log(data))
    this.ds.addContact(data).subscribe(data=>{
      this.route.navigate(['/admin/contact'])
    })
  }

}
