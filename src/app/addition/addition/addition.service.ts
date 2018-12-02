import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  Answer,
  answersSelector,
  currentSelector,
  FeatureAdditionState,
  levelSelector,
  operationsSelector, RoundInfo,
  scoreSelector, totalScore,
} from '@app/addition/addition.state';
import { filter, map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { Answer as UserAnswer, Correct, CreateOperations, EndOfRound, Next, Start, Wrong } from '@app/addition/addition.actions';
import { LevelService, levelValue } from '@app/core/level/level.service';

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

  public constructor(
    private store: Store<FeatureAdditionState>,
    private levelService: LevelService,
  ) {
    this.createStreams();
  }

  public start(): void {
    this.store.dispatch(new Start());
    this.createOperations(levelValue(1));
  }

  public createOperations(max = 10, min = 1): void {
    this.store.dispatch(new CreateOperations(this.levelService.createOperations(max, min)));
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
  }
}
