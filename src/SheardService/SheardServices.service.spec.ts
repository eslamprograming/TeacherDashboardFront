/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SheardServicesService } from './SheardServices.service';

describe('Service: SheardServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheardServicesService]
    });
  });

  it('should ...', inject([SheardServicesService], (service: SheardServicesService) => {
    expect(service).toBeTruthy();
  }));
});
