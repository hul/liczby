import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FeatureAdditionState, RoundInfo } from '@app/addition/addition.state';
import { select, Store } from '@ngrx/store';
import { roundInfoSelector } from '@app/addition/addition.selectors';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EndOfRoundGuard implements CanActivate {
  private roundInfo$ = this.store.pipe(select(roundInfoSelector));

  constructor(private store: Store<FeatureAdditionState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.roundInfo$.pipe(map((roundInfo: RoundInfo) => Boolean(roundInfo)));
  }
}
