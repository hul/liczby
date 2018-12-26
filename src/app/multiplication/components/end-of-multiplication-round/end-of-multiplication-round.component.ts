import { Component } from '@angular/core';
import { GameService } from '@core/services/game.service';
import { EndOfGameComponent } from '@core/components/end-of-game.component';
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
