import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchMovieResultListResponse, SearchMovieResults } from './search-movie-list';


@Injectable({
  providedIn: 'root'
})
export class SearchforMovieService {

  private searchMovieResultList = new BehaviorSubject<SearchMovieResults[]>([]);

  public readonly movieList$ = this.searchMovieResultList.asObservable();

  constructor(private httpClient:HttpClient) { }

 

  getMovies(movieName:string){
    return this.httpClient.get<SearchMovieResultListResponse>(`http://www.omdbapi.com/?apikey=c6c8a9f1&s=${movieName}`)
    .subscribe(data => this.searchMovieResultList.next(data.Search))
  }

}
