import { TestBed } from '@angular/core/testing';

import { StayBookingService } from './stay-booking.service';

describe('StayBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StayBookingService = TestBed.get(StayBookingService);
    expect(service).toBeTruthy();
  });
});
