import { Action } from '@ngrx/store';
import { OperationsConfig, Answer as UserAnswer, RoundInfo } from '@app/addition/addition.state';

export const TYPE = info => `[Addition] ${info}`;

export const INIT = TYPE('init');
export const NEXT = TYPE('next');
export const CREATE_OPERATIONS = TYPE('create oprtations');
export const ANSWER = TYPE('answer');
export const CORRECT = TYPE('correct');
export const WRONG = TYPE('wrong');
export const LEVEL_UP = TYPE('level up');
export const RETRY_LEVEL = TYPE('retry level');
export const END_OF_ROUND = TYPE('end of round');

export class Start implements Action {
  public readonly type = INIT;
  public constructor(public payload?: any) {}
}

export class LevelUp {
  public readonly type = LEVEL_UP;

  public constructor(public payload?: any) {
  }
}

export class RetryLevel {
  public readonly type = RETRY_LEVEL;

  public constructor(public payload?: any) {
  }
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
  public constructor(public payload: UserAnswer) {}
}

export class Wrong implements Action {
  public readonly type = WRONG;
  public constructor(public payload: UserAnswer) {}
}

export class EndOfRound implements  Action {
  public readonly type = END_OF_ROUND;
  public constructor(public payload: RoundInfo) {}
}

export type AdditionAction =
  Answer |
  Correct |
  CreateOperations |
  EndOfRound |
  LevelUp |
  Next |
  RetryLevel |
  Start |
  Wrong;
