import { Answer } from '../../Interface/index';
import { createAction, props } from '@ngrx/store';

export const GetAnswer = createAction(
  '[Question] Get Questions',
  props<{ questionId: string }>()
);
export const GetAnswerSuccess = createAction(
  '[Question]-GetAnswerSuccess',
  props<{ Answer: Answer[] }>()
);
export const GetAnswerFailure = createAction(
  '[Question]-GetAnswerFailure',
  props<{ errorMessage: string }>()
);

export const Addanswer = createAction(
  '[AddAnswer]-AddAnswer',
  props<{ questionId: string; uid: string; answer: Answer }>()
);
export const AddAnswerSuccess = createAction(
  '[AddAnswer]-AddAnswerSuccess',
  props<{ message: string }>()
);
export const AddAnswerFailure = createAction(
  '[AddAnswer]-AddAnswerFailure',
  props<{ message: string }>()
);
