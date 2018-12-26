import { Component, Input, OnInit } from '@angular/core';
import { Answer, Operation } from '@core/models/game.model';

@Component({
  selector: 'app-round-status',
  templateUrl: './round-status.component.html',
  styleUrls: ['./round-status.component.css']
})
export class RoundStatusComponent implements OnInit {

  @Input()
  public operations: Operation[];

  @Input()
  public answers: Answer[];

  @Input()
  public currentRound = 0;

  public constructor() { }

  public ngOnInit(): void {
  }

}
