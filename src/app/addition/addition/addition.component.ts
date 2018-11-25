import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Answer,
  currentSelector,
  levelSelector,
  operationsSelector,
  RoundInfo,
  scoreSelector,
} from '@app/addition/addition.state';
import { select, Store } from '@ngrx/store';
import {
  Correct,
  CreateOperations,
  Next,
  Start,
  Wrong,
  Answer as UserAnswer,
  EndOfRound,
} from '@app/addition/addition.actions';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelService, levelValue } from '@app/level/level.service';


@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit, OnDestroy {
  operations$: Observable<any>;
  current$: Observable<number>;
  level$: Observable<number>;
  score$: Observable<number>;
  currentOperation$: Observable<any>;
  operationsLength$: Observable<number>;
  endOfRound$: Observable<RoundInfo>;

  private subscriptions = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private levelService: LevelService,
    private router: Router,
    private store: Store<any>,
  ) {
    if (this.activatedRoute.snapshot.data.start) {
      this.store.dispatch(new Start());
      this.createOperations(levelValue(1));
    }
    this.createStreams();
    this.initSubscriptions();
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onAnswer(answer: Answer): void {
    this.store.dispatch(new UserAnswer(answer));

    answer.correct
      ? this.store.dispatch(new Correct(answer))
      : this.store.dispatch(new Wrong(answer));

    this.store.dispatch(new Next());
  }

  private createOperations(max = 10, min = 1): void {
    this.store.dispatch(new CreateOperations(this.levelService.createOperations(max, min)));
  }

  private createStreams(): void {
    this.operations$ = this.store.pipe(select(operationsSelector));
    this.current$ = this.store.pipe(select(currentSelector));
    this.level$ = this.store.pipe(select(levelSelector));
    this.score$ = this.store.pipe(select(scoreSelector));
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
    this.operationsLength$ = this.operations$.pipe(map(operations => operations.length));
  }


  private initSubscriptions(): void {
    this.subscriptions.add(
      this.endOfRound$.pipe(filter(roundInfo => roundInfo.last))
        .subscribe(roundInfo => {
          this.store.dispatch(new EndOfRound(roundInfo));
          this.router.navigate(['/dodawanie/koniec-rundy']);
        })
    );
  }
}
