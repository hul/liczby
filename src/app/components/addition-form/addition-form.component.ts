import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Answer, Operation } from '@core/models/game.model';
import { NzInputNumberComponent } from 'ng-zorro-antd';

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
  public input: NzInputNumberComponent;

  public form: FormGroup;

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
    Promise.resolve().then(() => this.input.focus());
  }

  public submit(event: Event): void {
    event.preventDefault();

    if (this.form.invalid) {
      return;
    }

    this.answer.emit({
      operation: this.operation,
      value: this.result.value,
      correct: this.result.value === this.operation.result,
    });
  }

  public get result(): FormControl {
    return this.form.get('result') as FormControl;
  }

  public onChange(event: Event): void {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    this.result.setValue(isNaN(value) ? '' : value);
  }

  private reset() {
    this.result.reset('');
  }

}
