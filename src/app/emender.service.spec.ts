import { TestBed } from '@angular/core/testing';

import { EmenderService } from './emender.service';

describe('EmenderService', () => {
  let service: EmenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
