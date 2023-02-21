import { TestBed } from '@angular/core/testing';

import { CurrenyserviceService } from './currenyservice.service';

describe('CurrenyserviceService', () => {
  let service: CurrenyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrenyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
