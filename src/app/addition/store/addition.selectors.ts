import { FeatureAdditionState } from '../addition.state';

export const currentSelector = (state: FeatureAdditionState) => state.addition.current;

export const operationsSelector = (state: FeatureAdditionState) => state.addition.operations;

export const scoreSelector = (state: FeatureAdditionState) => state.addition.score;

export const levelSelector = (state: FeatureAdditionState) => state.addition.level;

export const roundInfoSelector = (state: FeatureAdditionState) => state.addition.roundInfo;

export const answersSelector = (state: FeatureAdditionState) => state.addition.answers;

export const totalScore = (state: FeatureAdditionState) => state.addition.totalScore;
