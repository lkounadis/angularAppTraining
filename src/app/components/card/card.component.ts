import { Component, Input, OnInit } from '@angular/core';
import { SearchMovieResults } from 'src/app/services/SearchForMovie/search-movie-list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() movie: SearchMovieResults;
  constructor() { }

  ngOnInit(): void {
  }

}
