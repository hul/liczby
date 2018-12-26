import { Injectable } from '@angular/core';
import { Operation, OperationsConfig } from '@core/models/game.model';
import { EquationType } from '@core/services/equation-type.service';

@Injectable()
export class AdditionTypeService extends EquationType {

  readonly operator: string = '+';

  public createDisplayValue(a: number, b: number): string {
    return `${a} ${this.operator} ${b}`;
  }

  public createResult(a: number, b: number): number {
    return a + b;
  }

  public isEquationValid(operation: Operation, config: OperationsConfig): boolean {
    const { result, a, b } = operation;
    const { max, min } = config;
    return result >= min && result <= max && (a < max || b < max);
  }

  public getMaxResultForLevel(level: number): number {
    const delta = 5;
    return Math.max(1, (level + 1) * delta);
  }

}

