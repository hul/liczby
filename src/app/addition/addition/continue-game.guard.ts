import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FeatureAdditionState } from '@app/addition/addition.state';
import { select, Store } from '@ngrx/store';
import { operationsSelector } from '@app/addition/addition.selectors';
import { map, tap } from 'rxjs/operators';

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
