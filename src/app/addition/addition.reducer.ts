import { AdditionState, initialValue, Operation, OperationsConfig } from '@app/addition/addition.state';
import { AdditionAction, ANSWER, CORRECT, CREATE_OPERATIONS, INIT, NEXT, WRONG } from '@app/addition/addition.actions';

export const OPERATIONS: Operation[] = initOperations(50);

export function additionReducer(state: AdditionState = initialValue, action: AdditionAction): AdditionState {
  switch (action.type) {
    case INIT:
      return { ...initialValue };
    case ANSWER:
      return { ...state, answers: [...state.answers, action.payload ]};
    case CREATE_OPERATIONS:
      return { ...state, operations: createOperations(action.payload)};
    case NEXT:
      return { ...state, current: state.current + 1 };
    case CORRECT:
      return { ...state, score: state.score + 1 };
    case WRONG:
      return { ...state, score: Math.max(0, state.score - 1) };
    default:
      return state;
  }
}

function initOperations(max: number): Operation[] {
  const operations = [];
  for (let i = 1; i < max; i++) {
    for (let j = 1; j < max; j++) {
      operations.push({
        displayValue: `${i}+${j}`,
        result: i + j,
        a: i,
        b: j
      });
    }
  }
  return operations;
}

function createOperations(config: OperationsConfig) {
  return shuffle(OPERATIONS)
    .filter(operation => {
      let result = operation.result >= config.min && operation.result <= config.max;
      if (config.minA) {
        result = result && operation.a >= config.minA;
      }
      if (config.minB) {
        result = result && operation.b >= config.minB;
      }
      if (config.maxA) {
        result = result && operation.a <= config.maxA;
      }
      if (config.maxB) {
        result = result && operation.b <= config.maxB;
      }
      return result;
    })
    .slice(0, config.count);
}

/**
 * Shuffles array in place.
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 * @param a items An array containing the items.
 */
function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
