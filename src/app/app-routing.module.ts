import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { SearchForMovieComponent } from './components/search-for-movie/search-for-movie.component';
import { CreateListItemComponent } from './components/create-list-item/create-list-item.component';
import { HomeComponent } from './components/home/home.component';
import { RouteInRouteComponent } from './components/route-in-route/route-in-route.component';
import { PageDoesntExistComponent } from './components/page-doesnt-exist/page-doesnt-exist.component';
import { IDResolverService } from './services/IDResolver/idresolver.service';
import { PrivateComponent } from './components/private/private.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [{
  path:'home', component: HomeComponent,
}, 
{
  path:'home/:id', component:HomeComponent,
  resolve: {
  resolvedId: IDResolverService
},
},

{
  path:'routeInRoute', component: RouteInRouteComponent,
  children:[
    {path:'child-a', component:ChildAComponent},
    {path:'child-b', component:ChildBComponent},
  ]
}, 
{path:'private', component:PrivateComponent,
canActivate:[AuthGuard]
},
{path:'searchForMovie', component:SearchForMovieComponent},
{path:'createItemList', component:CreateListItemComponent},
{ path: '',   redirectTo: '/home', pathMatch:'full' },
{
  path:'**', component: PageDoesntExistComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
