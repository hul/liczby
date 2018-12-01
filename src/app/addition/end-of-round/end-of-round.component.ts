import { Component, OnDestroy, OnInit } from '@angular/core';
import { CreateOperations, LevelUp, RetryLevel } from '@app/addition/addition.actions';
import { Store, select } from '@ngrx/store';
import { LevelService, levelValue, SCORE_TO_LEVEL_UP } from '@app/core/level/level.service';
import { RoundInfo, roundInfoSelector } from '@app/addition/addition.state';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-end-of-round',
  templateUrl: './end-of-round.component.html',
  styleUrls: ['./end-of-round.component.css']
})
export class EndOfRoundComponent implements OnInit, OnDestroy {

  public roundInfo: RoundInfo;
  private subscriptions = new Subscription();

  constructor(
    private store: Store<any>,
    private levelService: LevelService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.subscriptions.add(
      this.store.pipe(select(roundInfoSelector)).subscribe(roundInfo => this.roundInfo = roundInfo)
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
