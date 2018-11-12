export interface AdditionState {
  answers: Answer[];
  current: number;
  operations: Operation[];
  score: number;
}

export interface FeatureAdditionState {
  addition: AdditionState;
}

export interface Operation {
  displayValue: string;
  result: number;
  a: number;
  b: number;
}

export interface Answer {
  correct: boolean;
  operation: Operation;
  value: any;
}

export interface OperationsConfig {
  count: number;
  max: number;
  min: number;
  minA?: number;
  minB?: number;
  maxA?: number;
  maxB?: number;
}

export const initialValue = {
  answers: [],
  current: 0,
  operations: [],
  score: 0,
};

export const currentSelector = (state: FeatureAdditionState) => state.addition.current;

export const operationsSelector = (state: FeatureAdditionState) => state.addition.operations;

export const scoreSelector = (state: FeatureAdditionState) => state.addition.score;
