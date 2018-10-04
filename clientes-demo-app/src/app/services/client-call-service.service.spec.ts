import { TestBed, inject } from '@angular/core/testing';

import { ClientCallServiceService } from './client-call-service.service';

describe('ClientCallServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientCallServiceService]
    });
  });

  it('should be created', inject([ClientCallServiceService], (service: ClientCallServiceService) => {
    expect(service).toBeTruthy();
  }));
});
