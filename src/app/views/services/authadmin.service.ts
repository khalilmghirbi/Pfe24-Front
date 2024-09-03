import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {

  ProfilAdmin={
    username:'',
    id_user:0
    //,role:''
  }

  //IsLoggedIn:boolean=false

  helper= new JwtHelperService()
  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post('http://localhost:4000/admin/login',data)
  }

  //saveDataProfil(token:any, username:any,role:any){
  saveDataProfil(token:any, username:any ,id_user:any){
    if (typeof token !== 'string') {
      console.error('Token is not a string:', token);
      return;
    }
    
  localStorage.setItem('token',token)
    //localStorage.setItem('role',role)
  localStorage.setItem('username',username)
  localStorage.setItem('id_user',id_user)

   this.ProfilAdmin.username=username
   this.ProfilAdmin.id_user=id_user
    //this.ProfilAdmin.role=role
 //////////this.IsLoggedIn=true
  let decodeToken=this.helper.decodeToken(token)
    //console.log(decodeToken)
  localStorage.setItem('token',token)
    //localStorage.setItem('username',decodeToken.username)
  }
/*
  getUsername(){
    let token:any=localStorage.getItem('token')
    let decodeToken= this.helper.decodeToken(token)
    return decodeToken.username
  }
*/
getUsername() {
  let token: any = localStorage.getItem('token');
  
  if (!token) {
    console.error('Token not found in local storage');
    return null; // or handle it as per your application's needs
  }

  let decodeToken;
  try {
    decodeToken = this.helper.decodeToken(token);
  } catch (error) {
    console.error('Failed to decode token', error);
    return null; // or handle it as per your application's needs
  }

  if (!decodeToken || !decodeToken.username) {
    console.error('Invalid token structure', decodeToken);
    return null; // or handle it as per your application's needs
  }

  return decodeToken.username;
}

LoggedIn(){
  let token:any=localStorage.getItem('token')
  if(!token){
    return false
  }
  let decodeToken=this.helper.decodeToken(token)
/* 
 let role= decodeToken.role
  if (role!=='Admin'){
    return false
  }
*/
if (this.helper.isTokenExpired(token)){
  return false
}
return true
}



}
  
  

 


