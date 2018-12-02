import { Component, OnDestroy, OnInit } from '@angular/core';
import { Answer, Operation, RoundInfo } from '@app/addition/addition.state';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AdditionService } from '@app/addition/addition/addition.service';


@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css'],
  providers: [AdditionService],
})
export class AdditionComponent implements OnInit, OnDestroy {
  answers$: Observable<Answer[]> = this.additionService.answers$;
  operations$: Observable<Operation[]> = this.additionService.operations$;
  current$: Observable<number> = this.additionService.current$;
  level$: Observable<number> = this.additionService.level$;
  score$: Observable<number> = this.additionService.score$;
  totalScore$: Observable<number> = this.additionService.totalScore$;
  currentOperation$: Observable<any> = this.additionService.currentOperation$;
  endOfRound$: Observable<RoundInfo> = this.additionService.endOfRound$;

  private subscriptions = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private additionService: AdditionService,
    private router: Router,
  ) {
    if (this.activatedRoute.snapshot.data.start) {
      this.additionService.start();
    }
    this.initSubscriptions();
  }

  public ngOnInit(): void { }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onAnswer(answer: Answer): void {
    this.additionService.answer(answer);
  }

  private initSubscriptions(): void {
    this.subscriptions.add(
      this.endOfRound$.pipe(filter(roundInfo => roundInfo.last))
        .subscribe(roundInfo => {
          this.additionService.endOfRound(roundInfo);
          this.router.navigate(['/dodawanie/koniec-rundy']);
        })
    );
  }
}
