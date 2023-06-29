import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as AnswerActions from '../Actions/answerAction';
import { Answer } from 'src/app/Interface';

export interface AnswerInterface {
  answers: Answer[];
  getAnswerError: string;
  addAnswerSuccess: string;
  addAnswerFailure: string;
  questionId: string;
}

const initialState: AnswerInterface = {
  answers: [],
  getAnswerError: '',
  addAnswerSuccess: '',
  addAnswerFailure: '',
  questionId: '',
};

const getAnswerState = createFeatureSelector<AnswerInterface>('answers');
export const getAnswer = createSelector(
  getAnswerState,
  (state) => state.answers
);
export const getAnswerError = createSelector(
  getAnswerState,
  (state) => state.getAnswerError
);
export const getQuestionId = createSelector(
  getAnswerState,
  (state) => state.questionId
);

export const answerReducer = createReducer(
  initialState,
  on(AnswerActions.GetAnswerSuccess, (state, action): AnswerInterface => {
    return {
      ...state,
      getAnswerError: '',
      answers: action.Answer,
    };
  }),
  on(AnswerActions.GetAnswerFailure, (state, action): AnswerInterface => {
    return {
      ...state,
      getAnswerError: action.errorMessage,
      answers: [],
    };
  }),

  on(AnswerActions.AddAnswerSuccess, (state, action): AnswerInterface => {
    return {
      ...state,
      addAnswerFailure: '',
      answers: state.answers,
      addAnswerSuccess: action.message,
    };
  }),

  on(AnswerActions.AddAnswerFailure, (state, action): AnswerInterface => {
    return {
      ...state,
      addAnswerFailure: action.message,
      addAnswerSuccess: ' ',
    };
  })
);
