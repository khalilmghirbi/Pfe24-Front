import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RDVComponent implements OnInit {
  dataArray:any=[]

  constructor(private ds:DataService ,private route:Router) { 
    this.ds.getAllrdvs().subscribe(data=>this.dataArray=data)
  }

  ngOnInit(): void {
  }

}
