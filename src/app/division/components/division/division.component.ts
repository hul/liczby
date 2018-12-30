import { Component } from '@angular/core';
import { GameComponent } from '@core/components/game.component';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '@core/services/game.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: [ './division.component.css' ],
})
export class DivisionComponent extends GameComponent {

  public constructor(activatedRoute: ActivatedRoute, gameService: GameService) {
    super(activatedRoute, gameService);
  }
}
