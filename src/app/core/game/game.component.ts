import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

import { Answer, Operation, RoundInfo } from '../game.state';
import { GameService } from '../services/game.service';


export class GameComponent implements OnDestroy {
  answers$: Observable<Answer[]> = this.gameService.answers$;
  operations$: Observable<Operation[]> = this.gameService.operations$;
  current$: Observable<number> = this.gameService.current$;
  level$: Observable<number> = this.gameService.level$;
  score$: Observable<number> = this.gameService.score$;
  totalScore$: Observable<number> = this.gameService.totalScore$;
  currentOperation$: Observable<any> = this.gameService.currentOperation$;
  endOfRound$: Observable<RoundInfo> = this.gameService.endOfRound$;

  protected subscriptions = new Subscription();

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected gameService: GameService,
  ) {
    if (this.activatedRoute.snapshot.data.start) {
      this.gameService.start();
    }
    this.initSubscriptions();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onAnswer(answer: Answer): void {
    this.gameService.answer(answer);
  }

  private initSubscriptions(): void {
    this.subscriptions.add(
      this.endOfRound$.pipe(filter(roundInfo => roundInfo.last))
        .subscribe(roundInfo => {
          this.gameService.endOfRound(roundInfo, this.activatedRoute);
        }),
    );
  }
}
