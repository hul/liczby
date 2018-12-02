import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Answer, Operation } from '@app/addition/addition.state';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

export enum ViewMode {
  VIEW = 'view',
  EDIT = 'edit'
}

const ANSWER_CORRECT_DELAY = 1500;
const ANSWER_WRONG_DELAY = 3000;

@Component({
  selector: 'app-addition-form',
  templateUrl: './addition-form.component.html',
  styleUrls: ['./addition-form.component.css']
})
export class AdditionFormComponent implements OnChanges, OnInit, AfterViewInit {

  @Input()
  public operation: Operation;

  @Output()
  public answer = new EventEmitter<Answer>();

  @ViewChild('input')
  public input: ElementRef;

  public form: FormGroup;
  public mode: ViewMode = ViewMode.EDIT;
  public userAnswer: Answer;
  public ViewMode = ViewMode;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      result: new FormControl('', Validators.required)
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.operation.isFirstChange()) {
      return;
    }

    this.reset();
  }

  public ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }

  public submit(event: Event): void {
    event.preventDefault();

    if (this.form.invalid) {
      return;
    }

    this.mode = ViewMode.VIEW;
    const userAnswer = {
      operation: this.operation,
      value: this.result.value,
      correct: this.result.value === this.operation.result,
    };

    this.userAnswer = userAnswer;
    this.userAnswer.correct ? this.afterAnswer(userAnswer, ANSWER_CORRECT_DELAY) : this.afterWrongAnswer(userAnswer);
  }

  public get result(): FormControl {
    return this.form.get('result') as FormControl;
  }

  private emitAnswer(answer: Answer): void {
    this.answer.emit(answer);
  }

  private reset() {
    this.mode = ViewMode.EDIT;
    this.result.reset('');
  }

  private afterAnswer(answer: Answer, duration: number): void {
    of(null).pipe(delay(duration)).subscribe(() => this.emitAnswer({ ...answer }));
  }

  private afterWrongAnswer(answer: Answer): void {
    of(null).pipe(delay(ANSWER_CORRECT_DELAY)).subscribe(() => {
      this.userAnswer = {
        operation: this.operation,
        value: this.operation.result,
        correct: true,
        autoCorrection: true
      };
      this.result.setValue(this.operation.result);
    });

    this.afterAnswer(answer, ANSWER_WRONG_DELAY);
  }

}
