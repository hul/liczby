import { Injectable } from '@angular/core';
import { GameService } from '@core/game.service';
import { Store } from '@ngrx/store';
import { FeatureAdditionState } from '@core/game.state';
import { LevelService } from '@core/level.service';
import { Router } from '@angular/router';

@Injectable()
export class SubtractionGameService extends GameService {
  public baseRoute = '/odejmowanie';

  public constructor(
    store: Store<FeatureAdditionState>,
    levelService: LevelService,
    router: Router,
  ) {
    super(store, levelService, router);
  }
}
