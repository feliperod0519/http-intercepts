import { TestBed } from '@angular/core/testing';

import { MapinterceptorService } from './mapinterceptor.service';

describe('MapinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapinterceptorService = TestBed.get(MapinterceptorService);
    expect(service).toBeTruthy();
  });
});
