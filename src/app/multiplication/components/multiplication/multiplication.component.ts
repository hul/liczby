import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '@core/services/game.service';
import { GameComponent } from '@core/components/game.component';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: [ './multiplication.component.css' ],
})
export class MultiplicationComponent extends GameComponent {

  public constructor(activatedRoute: ActivatedRoute, gameService: GameService) {
    super(activatedRoute, gameService);
  }

}
