import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hud',
  templateUrl: './hud.component.html',
  styleUrls: ['./hud.component.css']
})
export class HudComponent implements OnInit {

  @Input()
  public score: number;

  @Input()
  public level: number;

  @Input()
  public totalScore: number;

  public constructor() { }

  public ngOnInit(): void {
  }

}
