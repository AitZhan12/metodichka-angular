import { TestBed } from '@angular/core/testing';

import { StemServiceService } from './stem-service.service';

describe('StemServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StemServiceService = TestBed.get(StemServiceService);
    expect(service).toBeTruthy();
  });
});
