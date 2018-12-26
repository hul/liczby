import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { EndOfGameComponent } from '@core/components/end-of-game.component';
import { GameService } from '@core/services/game.service';

@Component({
  selector: 'app-end-of-addition-round',
  templateUrl: './end-of-addition-round.component.html',
  styleUrls: [ './end-of-addition-round.component.css' ],
})
export class EndOfAdditionRoundComponent extends EndOfGameComponent {

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
