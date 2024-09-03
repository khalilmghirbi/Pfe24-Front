import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedHospitalService {

  constructor() { }

  private selectedClinic: any;

  setSelectedClinic(clinic: any): void {
    this.selectedClinic = clinic;
  }

  getSelectedClinic(): any {
    return this.selectedClinic;
  }
}
