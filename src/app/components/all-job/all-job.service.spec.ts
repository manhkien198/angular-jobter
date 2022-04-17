import { TestBed } from '@angular/core/testing';

import { AllJobService } from './all-job.service';

describe('AllJobService', () => {
  let service: AllJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
