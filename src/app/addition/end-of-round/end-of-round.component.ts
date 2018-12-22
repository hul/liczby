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
  public roundInfo: RoundInfo;
  public roundInfo$: Observable<RoundInfo>;
  public roundResult$: Observable<boolean>;

  public answers$: Observable<Answer[]>;

  private subscriptions = new Subscription();

  @HostListener('document:keydown.enter', ['$event'])
  public onKeydownHandler(event: KeyboardEvent): void {
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
      : this.restartLevel(this.roundInfo);
    this.router.navigate(['/dodawanie/runda']);
  }

  private levelUp(roundInfo): void {
    this.store.dispatch(new LevelUp());
    this.createOperations(levelValue(roundInfo.level + 1), levelValue(roundInfo.level - 1));
  }

  private restartLevel(roundInfo): void {
    this.store.dispatch(new RetryLevel());
    this.createOperations(levelValue(roundInfo.level), levelValue(roundInfo.level - 2));
  }

  private createOperations(max = 10, min = 1): void {
    this.store.dispatch(new CreateOperations(this.levelService.createOperations(max, min)));
  }
}
