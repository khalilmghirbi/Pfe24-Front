import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {

  hospitals: any[] = [];
  selectedHospital: any;
  items: MenuItem[] =[];

  constructor(private ds:DataService ,private router:Router) {}

    ngOnInit(): void {
      const creatorId = localStorage.getItem('id_user'); // Suppose que l'ID utilisateur est stocké dans localStorage
      console.log('Retrieved Creator ID:', creatorId); // Log de l'ID de l'utilisateur connecté
    
      if (creatorId) {
        this.ds.getHospitalsByCreatorId(creatorId).subscribe(
          (data: any[]) => {
            console.log('Hospitals data retrieved from API:', data); // Log des données reçues de l'API
    
            this.hospitals = data;
    
            if (this.hospitals.length === 1) {
              this.selectedHospital = this.hospitals[0];
              console.log('Selected Hospital:', this.selectedHospital); // Log de l'hôpital sélectionné
            } else if (this.hospitals.length > 1) {
              console.log('Multiple hospitals found:', this.hospitals); // Log si plusieurs hôpitaux sont trouvés
            } else {
              console.log('No hospitals found for this creator ID.'); // Log si aucun hôpital n'est trouvé
            }
          },
          (error) => {
            console.error('Error fetching hospitals:', error); // Log en cas d'erreur
    

          })
        }

        this.items = [
          {
              label: 'Profile',
              icon: 'pi pi-home',
              command: () => this.router.navigate(['/admin/clinics/profile'])
          },
          {
              label: 'Media',
              icon: 'pi pi-images',
              command: () => this.router.navigate(['/admin/clinics/media'])
          },
          {
              label: 'Treatments',
              icon: 'pi pi-heart',
              command: () => this.router.navigate(['/admin/clinics/treatments'])
          },
          {
              label: 'Doctors',
              icon: 'pi pi-user',
              command: () => this.router.navigate(['/admin/clinics/doctors'])
          },
          {
            label: 'Notifications',
            icon: 'pi pi-envelope',
            command: () => this.router.navigate(['/admin/clinics/notifications'])
          },
          {
            label: 'Case Managers',
            icon: 'pi pi-user',
            command: () => this.router.navigate(['/admin/clinics/caseManagers'])
          },
          {
            label: 'Hotels',
            icon: 'pi pi-home',
            command: () => this.router.navigate(['/admin/clinics/hotels'])
          },
          {
            label: 'Reviews',
            icon: 'pi pi-star',
            command: () => this.router.navigate(['/admin/clinics/reviews'])
          }
      ]
      
    }

    
      
      
}