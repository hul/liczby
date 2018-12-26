import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameComponent } from '@core/components/game.component';
import { GameService } from '@core/services/game.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: [ './addition.component.css' ],
})
export class AdditionComponent extends GameComponent {
  public constructor(activatedRoute: ActivatedRoute, gameService: GameService) {

    super(activatedRoute, gameService);
  }
}
