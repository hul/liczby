import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AdditionService } from '@addition/addition.service';
import { RoundInfo } from '@addition/addition.state';

@Injectable({
  providedIn: 'root'
})
export class EndOfRoundGuard implements CanActivate {
  private roundInfo$ = this.additionService.roundInfo$;

  constructor(private additionService: AdditionService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.roundInfo$.pipe(map((roundInfo: RoundInfo) => Boolean(roundInfo)));
  }
}
