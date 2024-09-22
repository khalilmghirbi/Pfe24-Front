import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { HopitalProcedure } from 'src/app/models/Procedure';
import { SelectedHospitalService } from 'src/app/views/services/selected-hospital.service';
import { map, switchMap } from 'rxjs/operators';

interface Treatment {
  id: number;
  procedure_name: string;
  select: boolean;
}

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {
  parentSelector: boolean = false;
  dataArray: Treatment[] = [];
  selectedHospital:any;

  constructor(private selectedHospitalService:SelectedHospitalService,private ds: DataService,
     private route: Router, private activatedRoute:ActivatedRoute) { 
   /* this.ds.getAlltreatments().subscribe((data: any) => {
      if (Array.isArray(data)) {
        this.dataArray = data.map((item: any) => ({
          ...item,
          select: false
        }));
      } else {
        console.error('Response is not an array', data);
      }
    }, (error: HttpErrorResponse) => {
      console.error('Error fetching treatments', error);
    });*/
  }

  ngOnInit(): void {
    this.activatedRoute.parent?.paramMap.pipe(
      map(params => params.get('id')),
      switchMap((id) => this.ds.getHospitalsById(id))
   ).subscribe(
     (data: any[]) => {
       this.selectedHospital = data[0];
       console.log("Données reçues amine : ", this.selectedHospital);
     },
     (error) => {
       console.error('Erreur lors de la récupération des informations de l\'hôpital :', error);
     }
   )
    // this.selectedHospital = this.selectedHospitalService.getSelectedClinic();
    // console.log('hadha el id : ', this.selectedHospital.hopital_id);
  
    this.activatedRoute.parent?.paramMap.pipe(
      map(params => params.get('id')),
      switchMap((id) => this.ds.getTreatmentsByHopitalId(id))
   ).subscribe(
    (data: HopitalProcedure[]) => {
      console.log("hadhi il data lkollllllllll,", data);

      // Map HopitalProcedure to Treatment
      this.dataArray = data
        //.filter(procedure => procedure.hopital_id === this.selectedHospital.hopital_id)
        .map(procedure => ({
          id: procedure.hopital_procedure_id, // Use the correct property from HopitalProcedure
          procedure_name: `Procedure ${procedure.procedures_id}`, // Assuming procedure_name is derived from procedures_id
          select: false // Initialize select as false
        }));

      console.log("this is all the procedure received", this.dataArray);
    },
    (error) => {
      console.error('Error fetching procedure:', error);
    }
   )

    // this.ds.getTreatmentsByHopitalId(this.selectedHospital.hopital_id).subscribe(
    //   (data: HopitalProcedure[]) => {
    //     console.log("hadhi il data lkollllllllll,", data);
  
    //     // Map HopitalProcedure to Treatment
    //     this.dataArray = data
    //       //.filter(procedure => procedure.hopital_id === this.selectedHospital.hopital_id)
    //       .map(procedure => ({
    //         id: procedure.hopital_procedure_id, // Use the correct property from HopitalProcedure
    //         procedure_name: `Procedure ${procedure.procedures_id}`, // Assuming procedure_name is derived from procedures_id
    //         select: false // Initialize select as false
    //       }));
  
    //     console.log("this is all the procedure received", this.dataArray);
    //   },
    //   (error) => {
    //     console.error('Error fetching procedure:', error);
    //   }
    // );
   }

  onChangeProcedure($event: any): void {
    const id = +$event.target.value;  // Convert the value to a number
    const isChecked = $event.target.checked;

    if (id === -1) {
      // Toggle all selections
      this.dataArray = this.dataArray.map(item => ({ ...item, select: isChecked }));
      this.parentSelector = isChecked;
    } else {
      // Toggle single selection
      this.dataArray = this.dataArray.map(item => {
        if (item.id === id) {
          item.select = isChecked;
        }
        return item;
      });
    }

    console.log(this.dataArray);
  }
}
