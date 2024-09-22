import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Media } from 'src/app/models/Media';
import { Hopital_avis } from 'src/app/models/Review';
import { HopitalHotel } from 'src/app/models/Hotel';
import { HopitalContact } from 'src/app/models/Contact';
import { HopitalManager } from 'src/app/models/Manager';
import { HopitalProcedure } from 'src/app/models/Procedure';
import { HopitalMedecin } from 'src/app/models/medecin';
import { Hopital } from 'src/app/models/Hopital';
import { Appointment } from 'src/app/models/appointment'

@Injectable({
  providedIn: 'root'
})
export class DataService {
 creator_id :any;
  constructor(private http:HttpClient) { }

  getAlldossiers(){
      return this.http.get('http://localhost:4000/dossiers')
      //.subscribe(data=>console.log(data))
  }
      //return this.http.get('http://localhost:4000/dossiers')
      //.subscribe(data=>console.log(data))
    getOnedossier(id:any){
      return this.http.get('http://localhost:4000/dossiers/'+id)
    }

   getAllhotels():Observable<HopitalHotel[]>{
    return this.http.get<HopitalHotel[]>('http://localhost:4000/hotels')
   }

   addHotel(profile:any){
    return this.http.post('http://localhost:4000/createhotel',profile)
   }


   deleteHotel(id:any){
    return this.http.delete('http://localhost:4000/hotel/'+id)
   }

   updateHotel(id:any,newprofile:any){
    return this.http.put('http://localhost:4000/hotel/'+id ,newprofile)
   }

   getAlldoctors():Observable<HopitalMedecin[]>{
    return this.http.get<HopitalMedecin[]>('http://localhost:4000/docteurs')
   }

   addDoctor(profile:any){
    return this.http.post('http://localhost:4000/createdocteur',profile)
   }

   deleteDoctor(id:any){
    return this.http.delete('http://localhost:4000/docteur/'+id)
   }

   updateDoctor(id:any,newprofile:any){
    return this.http.put('http://localhost:4000/docteur/'+id ,newprofile)
   }

   getAllmanagers():Observable<HopitalManager[]>{
    return this.http.get<HopitalManager[]>('http://localhost:4000/managers')
 }

   addManager(profile:any){
    return this.http.post('http://localhost:4000/createmanager',profile)
 }

   updateManager(id:any,newprofile:any){
    return this.http.put('http://localhost:4000/manager/'+id ,newprofile)
 }

   getAllcontacts():Observable<HopitalContact[]>{
    return this.http.get<HopitalContact[]>('http://localhost:4000/contacts')
}

   deleteContact(id:any){
    return this.http.delete('http://localhost:4000/contact/'+id)
 }

  addContact(profile:any){
    return this.http.post('http://localhost:4000/createcontact',profile)
 }

  updateContact(id:any,newprofile:any){
     return this.http.put('http://localhost:4000/contact/'+id ,newprofile)
 } 

  getAlltreatments():Observable<HopitalProcedure[]>{
     return this.http.get<HopitalProcedure[]>('http://localhost:4000/treatments')
}
  addTreatment(profile:any){
     return this.http.post('http://localhost:4000/createtreatment',profile)
 }
 
 getAllmedia():Observable<Media[]>{
  return this.http.get<Media[]>('http://localhost:4000/photos')
}

 deleteMedia(id:any){
  return this.http.delete('http://localhost:4000/photos/'+id)
}

 getAllreviews():Observable<Hopital_avis[]>{
  return this.http.get<Hopital_avis[]>('http://localhost:4000/avis')
}

getreview(id:any){
  return this.http.get('http://localhost:4000/avis/'+id)
}

replyto(id:any, reply:any){
  return this.http.put('http://localhost:4000/avis/'+id,reply)
}

getAllusers(){
  this.creator_id = localStorage.getItem('id_user');
  return this.http.get('http://localhost:4000/AllManagers/'+ this.creator_id)
}

deleteUser(id:any){
  return this.http.delete('http://localhost:4000/managerUs/'+id)
}

updateUser(id:any,newprofile:any){
  return this.http.put('http://localhost:4000/managerUsupdate/'+id ,newprofile)
}

getAllrdvs(){
  return this.http.get('http://localhost:4000/rdvs')
}

getAllquotations(){
  return this.http.get('http://localhost:4000/quotations')
}

getHospitalsByCreatorId(creator_id: any) {
  return this.http.get<any[]>('http://localhost:4000/clinics/' + creator_id);
}

getHospitalsById(id: any) {
  return this.http.get<any[]>('http://localhost:4000/clinic/' + id);
}
////////////////////////////////////ajouter sans ts 
getHotelsByHopitalId(hopital_id: any) :Observable<HopitalHotel[]>{
  return this.http.get<HopitalHotel[]>('http://localhost:4000/hotelbyhopital/' + hopital_id);
}

getContactsByHopitalId(hopital_id: any):Observable<HopitalContact[]>{
  return this.http.get<HopitalContact[]>('http://localhost:4000/contactbyhopital/' + hopital_id);
}

getManagersByHopitalId(hopital_id: any) :Observable<HopitalManager[]>{
  return this.http.get<HopitalManager[]>('http://localhost:4000/managersbyhopital/' + hopital_id);
}

getReviewsByHopitalId(hopital_id: any):Observable<Hopital_avis[]> {
  return this.http.get<Hopital_avis[]>('http://localhost:4000/avisbyhopital/' + hopital_id);
}

getMediaByHopitalId(hopital_id: any):Observable<Media[]>{
  return this.http.get<Media[]>('http://localhost:4000/mediabyhopital/' + hopital_id);
}

getDoctorsByHopitalId(hopital_id: any):Observable<HopitalMedecin[]>{
  return this.http.get<HopitalMedecin[]>('http://localhost:4000/doctorbyhopital/' + hopital_id);
}

getTreatmentsByHopitalId(hopital_id: any):Observable<HopitalProcedure[]>{
  return this.http.get<HopitalProcedure[]>('http://localhost:4000/treatmentbyhopital/' + hopital_id);
}

getProfilByHopitalId(hopital_id: any):Observable<Hopital[]>{
  console.log('Helllo amiine this is the hopital id', hopital_id)
  return this.http.get<Hopital[]>('http://localhost:4000/profilbyhopital/' + hopital_id);
}

getAllhopitalinfo():Observable<Hopital[]>{
  return this.http.get<Hopital[]>('http://localhost:4000/profil')
}

getRdvsByDossierlId(dossier_id: any): Observable<Appointment[]>{
  return this.http.get<Appointment[]>('http://localhost:4000/rdvsbydossierid/' + dossier_id)
}



  }
