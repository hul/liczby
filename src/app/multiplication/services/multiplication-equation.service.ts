import { Injectable } from '@angular/core';
import { Operation, OperationsConfig } from '@core/game.state';

@Injectable()
export class MultiplicationEquationService {
  readonly operator: string = 'x';

  public createDisplayValue(a: number, b: number): string {
    return `${a} ${this.operator} ${b}`;
  }

  public createResult(a: number, b: number): number {
    return a * b;
  }

  public isEquationValid(operation: Operation, config: OperationsConfig): boolean {
    const { result, a, b } = operation;
    const { max } = config;
    return result <= max && a > 1 && b > 1;
  }

  public getMaxResultForLevel(level: number): number {
    const delta = 5;
    return 5 + (level + 1) * delta;
  }

}
