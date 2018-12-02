import { Component, Input, OnInit } from '@angular/core';
import { Answer, Operation } from '@app/addition/addition.state';
import { Observable } from 'rxjs';

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
