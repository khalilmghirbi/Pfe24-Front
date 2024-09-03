import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {

  dataReceived:any
  url:any

  constructor(private asd:AuthadminService , private route:Router, private arouter:ActivatedRoute) {
    //console.log(this.asd.IsLoggedIn)
    if(this.asd.LoggedIn()== true){
      this.route.navigate(['/admin'])
    }
   }

  ngOnInit(): void {
    this.url=this.arouter.snapshot.queryParams['returnUrl'] || '/admin/'
    console.log(this.url)
  }

 /* loginadmin(f:any){
    let data = f.value
    this.asd.login(data).subscribe(response=>console.log(response),err=>console.log(err))
  }*/
    loginadmin(f:any){
      let data=f.value
      this.asd.login(data).subscribe((response)=>
      {
        this.dataReceived=response
        console.log(this.dataReceived)
        //this.asd.saveDataProfil(this.dataReceived.token,this.dataReceived.username,this.dataReceived.role)
        this.asd.saveDataProfil(this.dataReceived.token.token,this.dataReceived.token.username,this.dataReceived.token.id_user)
        //console.log(this.asd.ProfilAdmin.username)
        //console.log(this.asd.ProfilAdmin.role)
        //console.log(this.asd.ProfilAdmin.IsLoggedIn)
        this.route.navigate([this.url])

      },err=>console.log(err))
    }



  
}
