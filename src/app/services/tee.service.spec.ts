import { TestBed, inject } from '@angular/core/testing';

import { TeeService } from './tee.service';

describe('TeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeeService]
    });
  });

  it('should be created', inject([TeeService], (service: TeeService) => {
    expect(service).toBeTruthy();
  }));
});
