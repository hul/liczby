import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '@core/services/game.service';
import { EndOfGameComponent } from '@core/components/end-of-game.component';

@Component({
  selector: 'app-end-of-division-round',
  templateUrl: './end-of-division-round.component.html',
  styleUrls: [ './end-of-division-round.component.css' ],
})
export class EndOfDivisionRoundComponent extends EndOfGameComponent {

  public answers$ = this.gameService.answers$;
  public roundInfo$ = this.gameService.roundInfo$;
  public roundResult$ = this.gameService.roundResult$;

  public constructor(activatedRoute: ActivatedRoute, gameService: GameService) {
    super(activatedRoute, gameService);
  }
}
