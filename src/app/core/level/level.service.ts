import { Injectable } from '@angular/core';
import { createOperations } from '@app/core/level/operations';

export const SCORE_TO_LEVEL_UP = 7;
export const DIFFICULTY_FACTOR = 5;
export const QUESTIONS = 10;

export const levelValue = level => Math.max(1, (level + 1) * DIFFICULTY_FACTOR);

@Injectable()
export class LevelService {

  constructor() { }

  public static createOperations(max = 10, min = 1): any {
    const config = {
      count: QUESTIONS,
      min: min,
      max: max,
      minA: 0,
      minB: 1,
    };
    return createOperations(config);
  }
}
