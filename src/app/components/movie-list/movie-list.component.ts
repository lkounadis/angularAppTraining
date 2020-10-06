import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MovieCacheService } from 'src/app/services/MovieCache/movie-cache.service';
import { SearchMovieResults } from 'src/app/services/SearchForMovie/search-movie-list';
import { SearchforMovieService } from 'src/app/services/SearchForMovie/searchfor-movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList$: Observable<SearchMovieResults[]>;
  cachedMovies:SearchMovieResults[];

  constructor(public movieService: SearchforMovieService, private movieCache: MovieCacheService) {
    this.movieList$ = this.movieService.movieList$
    this.cachedMovies = this.movieCache.getListOfMovies()
   }

  ngOnInit(): void {
  }

}
