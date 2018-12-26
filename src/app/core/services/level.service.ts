import { Injectable } from '@angular/core';
import { Operation, OperationsConfig } from '../game.state';
import { EquationType } from '@core/services/equation-type.service';

export const SCORE_TO_LEVEL_UP = 7;
export const QUESTIONS = 10;

@Injectable()
export class LevelService {

  private operations: Operation[] = this.initOperations(50);

  constructor(private equationType: EquationType) {
  }

  public createOperations(max = 10, min = 1): any {
    const config: OperationsConfig = {
      count: QUESTIONS,
      min: Math.max(1, min),
      max: max,
    };
    return this.shuffle(this.operations)
      .filter(operation => this.equationType.isEquationValid(operation, config))
      .slice(0, config.count);
  }

  public getMaxResultForLevel(level: number): number {
    return this.equationType.getMaxResultForLevel(level);
  }

  private initOperations(max: number): Operation[] {
    const operations = [];
    for (let i = 1; i < max; i++) {
      for (let j = 1; j < max; j++) {
        operations.push({
          displayValue: this.equationType.createDisplayValue(i, j),
          result: this.equationType.createResult(i, j),
          a: i,
          b: j,
        });
      }
    }
    return operations;
  }

  /**
   * Shuffles array in place.
   * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
   * @param a items An array containing the items.
   */
  private shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[ i ];
      a[ i ] = a[ j ];
      a[ j ] = x;
    }
    return a;
  }
}

