import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

import { Answer, RoundInfo } from '@core/models/game.model';

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
