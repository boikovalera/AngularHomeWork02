import { TestBed } from '@angular/core/testing';

import { NgCommonService } from './ng-common.service';

describe('NgCommonService', () => {
  let service: NgCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
