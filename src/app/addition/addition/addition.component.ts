import { Component, OnInit } from '@angular/core';
import { Answer, currentSelector, Operation, operationsSelector, scoreSelector } from '@app/addition/addition.state';
import { select, Store } from '@ngrx/store';
import { Correct, CreateOperations, Next, Start, Wrong, Answer as UserAnswer } from '@app/addition/addition.actions';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
  operations$: Observable<any>;
  current$: Observable<number>;
  score$: Observable<number>;
  currentOperation$: Observable<any>;
  operationsLength$: Observable<number>;
  endOfRound$: Observable<any>;

  constructor(private store: Store<any>) {
    this.init();

    this.operations$ = store.pipe(select(operationsSelector));
    this.current$ = store.pipe(select(currentSelector));
    this.score$ = store.pipe(select(scoreSelector));
    this.currentOperation$ = combineLatest(this.operations$, this.current$).pipe(
      map(values => values[0][values[1]]),
    );
    this.endOfRound$ = combineLatest(this.operations$, this.current$).pipe(
      map(values => values[1] !== 0 && values[0].length === values[1])
    );
    this.operationsLength$ = this.operations$.pipe(map(operations => operations.length));

    this.endOfRound$.pipe(filter(Boolean)).subscribe(() => {
      this.init();
    });
  }

  public ngOnInit(): void {
  }

  public onAnswer(answer: Answer): void {
    this.store.dispatch(new UserAnswer(answer));

    answer.correct
      ? this.store.dispatch(new Correct())
      : this.store.dispatch(new Wrong());

    this.store.dispatch(new Next());
  }

  private init(): void {
    this.store.dispatch(new Start());
    this.store.dispatch(new CreateOperations({
      count: 10,
      min: 5,
      max: 20,
      minA: 3,
      minB: 3,
    }));
  }
}
