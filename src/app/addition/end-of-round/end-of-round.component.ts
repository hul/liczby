import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CreateOperations, LevelUp, RetryLevel } from '@app/addition/addition.actions';
import { Store, select } from '@ngrx/store';
import { LevelService, levelValue, SCORE_TO_LEVEL_UP } from '@app/core/level/level.service';
import { Answer, RoundInfo } from '@app/addition/addition.state';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { answersSelector, roundInfoSelector } from '@app/addition/addition.selectors';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-end-of-round',
  templateUrl: './end-of-round.component.html',
  styleUrls: ['./end-of-round.component.css']
})
export class EndOfRoundComponent implements OnInit, OnDestroy {
  public answers$: Observable<Answer[]>;
  public roundInfo$: Observable<RoundInfo>;
  public roundInfo: RoundInfo;
  public roundResult$: Observable<boolean>;

  private subscriptions = new Subscription();

  @HostListener('document:keydown.enter', ['$event'])
  public onKeydownHandler(): void {
    this.playNextLevel();
  }

  constructor(
    private store: Store<any>,
    private levelService: LevelService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.subscriptions.add(
      this.store.pipe(select(roundInfoSelector)).subscribe(roundInfo => this.roundInfo = roundInfo)
    );
    this.answers$ = this.store.pipe(select(answersSelector));
    this.roundInfo$ = this.store.pipe(select(roundInfoSelector));
    this.roundResult$ = this.roundInfo$.pipe(
      filter(result => !!result),
      map(result => result.score > SCORE_TO_LEVEL_UP)
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public playNextLevel(): void {
    this.roundInfo.score > SCORE_TO_LEVEL_UP
      ? this.levelUp(this.roundInfo)
      : this.restartLevel();
  }

  private levelUp(roundInfo): void {
    this.store.dispatch(new LevelUp());
    const max = levelValue(roundInfo.level + 1);
    const min = levelValue(roundInfo.level - 1);
    this.store.dispatch(new CreateOperations(LevelService.createOperations(max, min)));
    this.router.navigate([ '/dodawanie/runda' ]);
  }

  private restartLevel(): void {
    this.store.dispatch(new RetryLevel());
    this.router.navigate([ '/dodawanie/runda' ]);
  }

}
