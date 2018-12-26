import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameComponent } from '@core/game/game.component';
import { GameService } from '@core/services/game.service';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: [ './subtraction.component.css' ],
})
export class SubtractionComponent extends GameComponent {

  public constructor(activatedRoute: ActivatedRoute, gameService: GameService) {
    super(activatedRoute, gameService);
  }

}
