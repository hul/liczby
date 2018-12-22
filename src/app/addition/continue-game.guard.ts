import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { FeatureAdditionState } from '@addition/addition.state';
import { operationsSelector } from '@addition/store/addition.selectors';

@Injectable({
  providedIn: 'root'
})
export class ContinueGameGuard implements CanActivate {
  private operations$ = this.store.pipe(select(operationsSelector));

  public constructor(private store: Store<FeatureAdditionState>, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.operations$.pipe(
      map(operations => Boolean(operations && operations.length)),
      tap(result => !result && this.router.navigate(['dodawanie'])),
    );
  }
}
