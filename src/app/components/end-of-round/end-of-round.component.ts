import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AdditionService } from '@addition/addition.service';
import { Answer, RoundInfo } from '@addition/addition.state';
import { SCORE_TO_LEVEL_UP } from '@app/core/level/level.service';

@Component({
  selector: 'app-end-of-round',
  templateUrl: './end-of-round.component.html',
  styleUrls: [ './end-of-round.component.css' ],
})
export class EndOfRoundComponent implements OnInit, OnDestroy {
  public answers$: Observable<Answer[]>;
  public roundInfo$: Observable<RoundInfo>;
  public roundInfo: RoundInfo;
  public roundResult$: Observable<boolean>;

  private subscriptions = new Subscription();

  @HostListener('document:keydown.enter', [ '$event' ])
  public onKeydownHandler(): void {
    this.playNextLevel();
  }

  constructor(
    private additionService: AdditionService,
  ) {
  }

  public ngOnInit(): void {
    this.answers$ = this.additionService.answers$;
    this.roundInfo$ = this.additionService.roundInfo$;
    this.roundResult$ = this.additionService.roundResult$;
    this.subscriptions.add(
      this.roundInfo$.subscribe(roundInfo => this.roundInfo = roundInfo),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public playNextLevel(): void {
    this.roundInfo.score > SCORE_TO_LEVEL_UP
      ? this.additionService.levelUp(this.roundInfo)
      : this.additionService.restartLevel();
  }

}
