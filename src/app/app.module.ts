import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { IncrementComponent } from './components/increment/increment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouteInRouteComponent } from './components/route-in-route/route-in-route.component';
import { PageDoesntExistComponent } from './components/page-doesnt-exist/page-doesnt-exist.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { CreateListItemComponent } from './components/create-list-item/create-list-item.component';
import { SearchForMovieComponent } from './components/search-for-movie/search-for-movie.component';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SubmitWithEnterDirective } from './directives/submitWithEnter/submit-with-enter.directive';
import {MatButtonModule} from '@angular/material/button';
import { PrivateComponent } from './components/private/private.component';
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    IncrementComponent,
    NavbarComponent,
    HomeComponent,
    RouteInRouteComponent,
    PageDoesntExistComponent,
    ChildAComponent,
    ChildBComponent,
    CreateListItemComponent,
    SearchForMovieComponent,
    MovieListComponent,
    SubmitWithEnterDirective,
    PrivateComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
