import { Injectable } from '@angular/core';
import { CreateOperations } from '@app/addition/addition.actions';

export const SCORE_TO_LEVEL_UP = 7;
export const DIFFICULTY_FACTOR = 5;

export const levelValue = level => Math.max(1, (level + 1) * DIFFICULTY_FACTOR);

@Injectable()
export class LevelService {

  constructor() { }

  public createOperations(max = 10, min = 1): any {
    return {
      count: 10,
      min: min,
      max: max,
      minA: 0,
      minB: 1,
    };
  }
}
