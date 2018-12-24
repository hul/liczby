import { Component } from '@angular/core';
import { GameService } from '@core/game.service';
import { SCORE_TO_LEVEL_UP } from '@core/level.service';
import { EndOfGameComponent } from '@core/game/end-of-game.component';

@Component({
  selector: 'app-end-of-addition-round',
  templateUrl: './end-of-addition-round.component.html',
  styleUrls: [ './end-of-addition-round.component.css' ],
})
export class EndOfAdditionRoundComponent extends EndOfGameComponent {

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
