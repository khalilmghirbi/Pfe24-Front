import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit {
id=''
  dataArray:any
  constructor(private ds:DataService, private route:Router) { 
    this.ds.getAlldossiers().subscribe(data=>this.dataArray=data)
  }

  ngOnInit(): void {
  }

  details(id:any){
    this.route.navigate(['admin/dossierdetails/' +id])
  }

}
