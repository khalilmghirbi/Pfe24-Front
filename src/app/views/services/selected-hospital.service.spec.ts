import { TestBed } from '@angular/core/testing';

import { SelectedHospitalService } from './selected-hospital.service';

describe('SelectedHospitalService', () => {
  let service: SelectedHospitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedHospitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
