import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Answer, Operation } from '@app/addition/addition.state';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.css']
})
export class OperationFormComponent implements OnChanges, OnInit {

  @Input()
  public operation: Operation;

  @Output()
  public answer = new EventEmitter<Answer>();

  public form: FormGroup;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.operation.isFirstChange()) {
      return;
    }

    this.reset();
  }

  ngOnInit() {
    this.form = new FormGroup({
      result: new FormControl('', Validators.required)
    });
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

  private reset() {
    this.result.reset('');
  }

}
