import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(private ds: DataService, private route: Router) { 
    this.ds.getAlltreatments().subscribe((data: any) => {
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
    });
  }

  ngOnInit(): void { }

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
