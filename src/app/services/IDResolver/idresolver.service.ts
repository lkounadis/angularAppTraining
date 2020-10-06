import { Injectable } from '@angular/core';
import {
  ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router, RouterStateSnapshot,
} from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IDResolverService {
  constructor(private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): string {
    const id = route.paramMap.get('id');

    return `${id}fromResolver`;
  }
}
