import { Action } from '@ngrx/store';
import { OperationsConfig, Answer as UserAnswer } from '@app/addition/addition.state';

export const ID = 'Addition';

export const INIT = `[${ID}] init`;
export const NEXT = `[${ID}] next`;
export const CREATE_OPERATIONS = `[${ID}] create oprtations`;
export const ANSWER = `[${ID}] answer`;
export const CORRECT = `[${ID}] correct`;
export const WRONG = `[${ID}] wrong`;

export class Start implements Action {
  public readonly type = INIT;
  public constructor(public payload?: any) {}
}

export class CreateOperations implements Action {
  public readonly type = CREATE_OPERATIONS;
  public constructor(public payload: OperationsConfig) {}
}

export class Next implements Action {
  public readonly type = NEXT;
  public constructor(public payload?: any) {}
}

export class Answer implements Action {
  public readonly type = ANSWER;
  public constructor(public payload: UserAnswer) {}
}

export class Correct implements Action {
  public readonly type = CORRECT;
  public constructor(public payload?: any) {}
}

export class Wrong implements Action {
  public readonly type = WRONG;
  public constructor(public payload?: any) {}
}

export type AdditionAction =
  Answer |
  Correct |
  CreateOperations |
  Next |
  Start |
  Wrong;
