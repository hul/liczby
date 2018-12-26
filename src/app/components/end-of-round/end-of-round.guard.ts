import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { GameService } from '@core/services/game.service';
import { RoundInfo } from '@core/game.state';

@Injectable()
export class EndOfRoundGuard implements CanActivate {
  private roundInfo$ = this.additionService.roundInfo$;

  constructor(private additionService: GameService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.roundInfo$.pipe(map((roundInfo: RoundInfo) => {
      return Boolean(roundInfo);
    }));
  }
}
