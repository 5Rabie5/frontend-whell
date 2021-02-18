import { TestBed } from '@angular/core/testing';

import { CheckedFlagMapService } from './checked-flag-map.service';

describe('CheckedFlagMapService', () => {
  let service: CheckedFlagMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckedFlagMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
