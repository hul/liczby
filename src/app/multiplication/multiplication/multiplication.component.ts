import { Component, OnInit } from '@angular/core';
import { GameService } from '@core/game.service';
import { ActivatedRoute } from '@angular/router';
import { GameComponent } from '@core/game/game.component';

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
