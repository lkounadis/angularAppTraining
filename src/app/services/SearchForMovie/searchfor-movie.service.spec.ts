import { TestBed } from '@angular/core/testing';

import { SearchforMovieService } from './searchfor-movie.service';

describe('SearchforMovieService', () => {
  let service: SearchforMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchforMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
