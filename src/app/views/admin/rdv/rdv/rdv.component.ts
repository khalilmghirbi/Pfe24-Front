import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RDVComponent implements OnInit {
  dataArray: Appointment[] = []
  id = ''
  messageErr = ''
  constructor(private route: ActivatedRoute, private ds: DataService) {

    // Log de l'ID récupéré depuis les paramètres
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('ID from route params:', this.id);

      // Log de la requête des rendez-vous
      this.ds.getRdvsByDossierlId(this.id).subscribe(
        data => {
          this.dataArray = data;
          console.log('Data received from API Appointments:', this.dataArray);
        },
        (err: HttpErrorResponse) => {
          console.error('Error fetching data:', err);
          this.messageErr = "We didn't find this RDV in our database";
        }
      );
    });
  }


  getStatus(stateNumber : Number): string{
    if(stateNumber === 1)
      return "Accepted"
    if(stateNumber === 0)
      return "Waiting"
    if(stateNumber === -1)
      return "Declined"
    return "Unknown";
  }

  getStatusClassName(stateNumber : Number): string{
    if(stateNumber === 1)
      return "appointment-status-accpected"
    if(stateNumber === 0)
      return "appointment-status-waiting"
    if(stateNumber === -1)
      return "appointment-status-Declined"
    return "appointment-status-waiting";
  }

  getConfirmClass(stateNumber : Number): string{
    if(stateNumber !== 0)
      return "confirm-btn-disabled"
    return "confirm-btn";
  }
  
  ngOnInit(): void {

  }
}


