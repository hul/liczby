import { Injectable } from '@angular/core';
import { EquationType } from '@core/services/equation-type.service';
import { Operation, OperationsConfig } from '@core/models/game.model';

@Injectable()
export class DivisionTypeService extends EquationType {

  readonly operator: string = '/';

  public createDisplayValue(a: number, b: number): string {
    return `${a} ${this.operator} ${b}`;
  }

  public createResult(a: number, b: number): number {
    return a / b;
  }

  public isEquationValid(operation: Operation, config: OperationsConfig): boolean {
    const { result, a, b } = operation;
    const { max } = config;
    return result <= max && a > 1 && b > 1 && a < max && b < max;
  }

  public getMaxResultForLevel(level: number): number {
    const delta = 5;
    return 5 + (level + 1) * delta;
  }
}
