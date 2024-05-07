/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterseptorService } from './interseptor.service';

describe('Service: Interseptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterseptorService]
    });
  });

  it('should ...', inject([InterseptorService], (service: InterseptorService) => {
    expect(service).toBeTruthy();
  }));
});
