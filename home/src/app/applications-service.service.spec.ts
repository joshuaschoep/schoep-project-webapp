import { TestBed } from '@angular/core/testing';

import { ApplicationsServiceService } from './applications-service.service';

describe('ApplicationsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationsServiceService = TestBed.get(ApplicationsServiceService);
    expect(service).toBeTruthy();
  });
});
