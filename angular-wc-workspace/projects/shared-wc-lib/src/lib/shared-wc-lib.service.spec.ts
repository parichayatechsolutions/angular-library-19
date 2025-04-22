import { TestBed } from '@angular/core/testing';

import { SharedWcLibService } from './shared-wc-lib.service';

describe('SharedWcLibService', () => {
  let service: SharedWcLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedWcLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
