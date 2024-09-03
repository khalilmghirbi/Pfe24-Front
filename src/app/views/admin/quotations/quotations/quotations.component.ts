import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css']
})
export class QuotationsComponent implements OnInit {
  dataArray:any=[]

  constructor(private ds:DataService ,private route:Router) { 
    this.ds.getAllquotations().subscribe(data=>this.dataArray=data)
  }

  ngOnInit(): void {
  }

}
