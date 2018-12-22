import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Answer, FeatureAdditionState, RoundInfo } from '@addition/addition.state';
import {
  Answer as UserAnswer,
  Correct,
  CreateOperations,
  EndOfRound,
  LevelUp,
  Next,
  RetryLevel,
  Start,
  Wrong,
} from '@addition/store/addition.actions';
import { LevelService, levelValue, SCORE_TO_LEVEL_UP } from '@app/core/level/level.service';
import {
  answersSelector,
  currentSelector,
  levelSelector,
  operationsSelector, roundInfoSelector,
  scoreSelector,
  totalScore,
} from '@addition/store/addition.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdditionService {
  public answers$ = this.store.pipe(select(answersSelector));
  public operations$ = this.store.pipe(select(operationsSelector));
  public current$ = this.store.pipe(select(currentSelector));
  public level$ = this.store.pipe(select(levelSelector));
  public score$ = this.store.pipe(select(scoreSelector));
  public totalScore$: Observable<number> = this.store.pipe(select(totalScore));
  public currentOperation$: Observable<any>;
  public endOfRound$: Observable<RoundInfo>;
  public roundInfo$ = this.store.pipe(select(roundInfoSelector));
  public roundResult$: Observable<boolean>;

  public constructor(
    private store: Store<FeatureAdditionState>,
    private router: Router,
  ) {
    this.createStreams();
  }

  public start(): void {
    this.store.dispatch(new Start());
    this.createOperations(levelValue(1));
  }

  public createOperations(max = 10, min = 1): void {
    this.store.dispatch(new CreateOperations(LevelService.createOperations(max, min)));
  }

  public answer(answer: Answer): void {
    this.store.dispatch(new UserAnswer(answer));

    answer.correct
      ? this.store.dispatch(new Correct(answer))
      : this.store.dispatch(new Wrong(answer));

    this.store.dispatch(new Next());
  }

  public endOfRound(roundInfo: RoundInfo): void {
    this.store.dispatch(new EndOfRound(roundInfo));
    this.router.navigate([ '/dodawanie/koniec-rundy' ]);
  }

  private createStreams(): void {
    this.currentOperation$ = combineLatest(this.operations$, this.current$).pipe(
      filter(values => values[0].length > values[1]),
      map(values => values[0][values[1]]),
    );
    this.endOfRound$ = combineLatest(
      this.operations$,
      this.current$,
      this.score$,
      this.level$,
    ).pipe(
      map(values => {
        const last = values[1] !== 0 && values[0].length === values[1];
        const score = values[2];
        const level = values[3];
        return { last, score, level };
      })
    );
    this.roundResult$ = this.roundInfo$.pipe(
      filter(result => !!result),
      map(result => result.score > SCORE_TO_LEVEL_UP),
    );
  }

  public levelUp(roundInfo: RoundInfo): void {
    this.store.dispatch(new LevelUp());
    const max = levelValue(roundInfo.level + 1);
    const min = levelValue(roundInfo.level - 1);
    this.store.dispatch(new CreateOperations(LevelService.createOperations(max, min)));
    this.router.navigate([ '/dodawanie/runda' ]);
  }

  public restartLevel(): void {
    this.store.dispatch(new RetryLevel());
    this.router.navigate([ '/dodawanie/runda' ]);
  }
}
