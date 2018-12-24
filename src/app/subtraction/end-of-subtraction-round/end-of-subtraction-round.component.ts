import { Component, OnInit } from '@angular/core';
import { GameService } from '@core/game.service';
import { EndOfGameComponent } from '@core/game/end-of-game.component';
import { SCORE_TO_LEVEL_UP } from '@core/level.service';

@Component({
  selector: 'app-end-of-subtraction-round',
  templateUrl: './end-of-subtraction-round.component.html',
  styleUrls: [ './end-of-subtraction-round.component.css' ],
})
export class EndOfSubtractionRoundComponent extends EndOfGameComponent {

  public answers$ = this.gameService.answers$;
  public roundInfo$ = this.gameService.roundInfo$;
  public roundResult$ = this.gameService.roundResult$;

  constructor(private gameService: GameService) {
    super();
  }

  public levelUpOrRetry(): void {
    this.roundInfo.score > SCORE_TO_LEVEL_UP
      ? this.gameService.levelUp(this.roundInfo)
      : this.gameService.restartLevel();
  }
}
