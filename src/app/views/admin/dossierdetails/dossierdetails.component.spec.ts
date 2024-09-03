import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierdetailsComponent } from './dossierdetails.component';

describe('DossierdetailsComponent', () => {
  let component: DossierdetailsComponent;
  let fixture: ComponentFixture<DossierdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DossierdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
