import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { GameService } from '@core/game.service';
import { Answer, RoundInfo } from '@core/game.state';
import { SCORE_TO_LEVEL_UP } from '@core/level.service';

@Component({
  selector: 'app-end-of-round',
  templateUrl: './end-of-round.component.html',
  styleUrls: [ './end-of-round.component.css' ],
})
export class EndOfRoundComponent {

  @Input() answers: Answer[];
  @Input() roundInfo: RoundInfo;
  @Input() roundResult: boolean;

  @Output() levelUpOrRetry = new EventEmitter();

  @HostListener('document:keydown.enter', [ '$event' ])
  public onKeydownHandler(): void {
    this.playNextLevel();
  }

  public playNextLevel(): void {
    this.levelUpOrRetry.next();
  }

}
