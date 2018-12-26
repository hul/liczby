import { Component, OnInit } from '@angular/core';
import { GameService } from '@core/game.service';
import { SCORE_TO_LEVEL_UP } from '@core/level.service';
import { EndOfGameComponent } from '@core/game/end-of-game.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-end-of-multiplication-round',
  templateUrl: './end-of-multiplication-round.component.html',
  styleUrls: [ './end-of-multiplication-round.component.css' ],
})
export class EndOfMultiplicationRoundComponent extends EndOfGameComponent {

  public answers$ = this.gameService.answers$;
  public roundInfo$ = this.gameService.roundInfo$;
  public roundResult$ = this.gameService.roundResult$;

  constructor(
    activatedRoute: ActivatedRoute,
    gameService: GameService,
  ) {
    super(activatedRoute, gameService);
  }

}
