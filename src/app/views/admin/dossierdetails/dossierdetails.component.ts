import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dossierdetails',
  templateUrl: './dossierdetails.component.html',
  styleUrls: ['./dossierdetails.component.css']
})
export class DossierdetailsComponent implements OnInit {
  id=''
  dataObject:any
  messageErr=''

  constructor(private route:ActivatedRoute, private ds:DataService) { 
    //this.route.params.subscribe(data=>console.log(data))
   this.route.params.subscribe(params=>this.id=params['id'])
   this.ds.getOnedossier(this.id).subscribe(response=>this.dataObject=response,(err:HttpErrorResponse)=>{
      console.log(err)
      this.messageErr="we don't found this dossiers in our database"})
      //this.route.params.subscribe(data=>console.log(data))
  }

  ngOnInit(): void {
  }

}
