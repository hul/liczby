import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { GameService } from '@core/services/game.service';

@Injectable()
export class ContinueGameGuard implements CanActivate {
  private operations$ = this.gameService.operations$;

  public constructor(private gameService: GameService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.operations$.pipe(
      map(operations => {
        return Boolean(operations && operations.length);
      }),
      tap(result => !result && this.router.navigate(['dodawanie'])),
    );
  }
}
