export interface AdditionState {
  answers: Answer[];
  current: number;
  operations: Operation[];
  score: number;
  lastAnswer: Answer;
  level: number;
  levelInfo: any;
  roundInfo: RoundInfo;
  totalScore: number;
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

export interface RoundInfo {
  last: boolean;
  score: number;
  level: number;
}

export const initialValue = {
  answers: [],
  current: 0,
  lastAnswer: null,
  level: 1,
  levelInfo: null,
  operations: [],
  roundInfo: null,
  score: 0,
  totalScore: 0,
};

