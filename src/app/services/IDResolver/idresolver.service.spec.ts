import { TestBed } from '@angular/core/testing';

import { IDResolverService } from './idresolver.service';

describe('IDResolverService', () => {
  let service: IDResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IDResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
