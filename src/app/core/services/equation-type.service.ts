import { Operation, OperationsConfig } from '../game.state';

export interface EquationTypeInterface {
  operator: string;

  createDisplayValue(a: number, b: number, operator: string): string;

  createResult(a: number, b: number): number;

  isEquationValid(operation: Operation, config: OperationsConfig): boolean;

  getMaxResultForLevel(level: number): number;
}

export abstract class EquationType implements EquationTypeInterface {
  abstract operator: string;

  abstract createDisplayValue(a: number, b: number): string;

  abstract createResult(a: number, b: number): number;

  abstract isEquationValid(operation: Operation, config: OperationsConfig): boolean;

  abstract getMaxResultForLevel(level: number): number;
}
