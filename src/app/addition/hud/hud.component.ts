import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hud',
  templateUrl: './hud.component.html',
  styleUrls: ['./hud.component.css']
})
export class HudComponent implements OnInit {

  @Input() public score$: Observable<number>;
  @Input() public current$: Observable<number>;
  @Input() public level$: Observable<number>;
  @Input() public operationsLength$: Observable<number>;

  constructor() { }

  ngOnInit() {
  }

}
