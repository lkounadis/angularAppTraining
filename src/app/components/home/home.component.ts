import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  id: string;

  idFromObservable$: Observable<any>;

  idFromObservable: string;

  idFromResolver: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.idFromObservable$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
    );

    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
    ).subscribe((id) => {
      this.idFromObservable = id;
    });

    this.route.data.subscribe(
      (data) => this.idFromResolver = data.resolvedId,
    );
  }
}
