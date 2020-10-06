import { Component, OnInit } from '@angular/core';
import { SearchforMovieService } from 'src/app/services/SearchForMovie/searchfor-movie.service';

@Component({
  selector: 'app-search-for-movie',
  templateUrl: './search-for-movie.component.html',
  styleUrls: ['./search-for-movie.component.css']
})
export class SearchForMovieComponent implements OnInit {
  movie='';
  constructor(private searchForMovieService:SearchforMovieService) { }

  ngOnInit(): void {
  }

  searchForMovie(){
    this.searchForMovieService.getMovies(this.movie)
    this.movie = ''
  }


}
