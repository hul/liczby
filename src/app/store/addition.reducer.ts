import { GameState } from '@core/game.state';
import {
  AdditionAction,
  ANSWER,
  CORRECT,
  CREATE_OPERATIONS,
  END_OF_ROUND,
  INIT,
  LEVEL_UP,
  NEXT,
  RETRY_LEVEL,
  WRONG,
} from '@app/store/addition.actions';

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

export function additionReducer(state: GameState = initialValue, action: AdditionAction): GameState {
  switch (action.type) {
    case INIT:
      return { ...initialValue };
    case ANSWER:
      return { ...state, answers: [ ...state.answers, action.payload ] };
    case CREATE_OPERATIONS:
      return { ...state, operations: [ ...action.payload ], levelInfo: { ...action.payload } };
    case END_OF_ROUND:
      return { ...state, roundInfo: { ...action.payload } };
    case LEVEL_UP:
      return { ...initialValue, level: state.level + 1, totalScore: state.totalScore + state.score };
    case RETRY_LEVEL:
      return { ...initialValue, operations: state.operations, level: state.level, totalScore: state.totalScore + state.score };
    case NEXT:
      return { ...state, current: state.current + 1 };
    case CORRECT:
      return { ...state, score: state.score + 1, lastAnswer: { ...action.payload } };
    case WRONG:
      return { ...state, score: state.score, lastAnswer: { ...action.payload } };
    default:
      return state;
  }
}
