import { Observable, Subscription } from 'rxjs';
import { Answer, RoundInfo } from '@core/game.state';
import { OnDestroy, OnInit } from '@angular/core';
import { SCORE_TO_LEVEL_UP } from '@core/level.service';

export class EndOfGameComponent implements OnInit, OnDestroy {
  public answers$: Observable<Answer[]>;
  public roundInfo$: Observable<RoundInfo>;
  public roundInfo: RoundInfo;
  public roundResult$: Observable<boolean>;

  protected subscriptions = new Subscription();

  public ngOnInit(): void {
    this.subscriptions.add(this.roundInfo$.subscribe(roundInfo => this.roundInfo = roundInfo));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
