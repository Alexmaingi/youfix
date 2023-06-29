import { createAction, props } from '@ngrx/store';
import { AddQuestions, Questions } from 'src/app/Interface';

export const GetQuestion = createAction(
  '[Question] Get Questions',
  props<{ pageNumber: number; pageSize: number }>()
);
export const GetQuestionSuccess = createAction(
  '[Question]-GetQuestionSuccess',
  props<{ Questions: Questions[] }>()
);
export const GetQuestionFailure = createAction(
  '[Question]-GetQuestionFailure',
  props<{ errorMessage: string }>()
);

export const GetMyQuestion = createAction('[MyQuestion]-GetQuestion');
export const GetMyQuestioSuccess = createAction(
  '[MyQuestion]-GetMyQuestionSuccess',
  props<{ Questions: Questions[] }>()
);
export const GetMyQuestionFailure = createAction(
  '[MyQuestion]-GetMyQuestionFailure',
  props<{ errorMessage: string }>()
);

export const Addquestion = createAction(
  '[AddQuestion]-AddQuestion',
  props<{ newQuestion: AddQuestions; userId: string }>()
);
export const AddQuestionSuccess = createAction(
  '[AddQuestion]-AddQuestionSuccess',
  props<{ message: string }>()
);
export const AddQuestionFailure = createAction(
  '[AddQuestion]-AddQuestionFailure',
  props<{ message: string }>()
);

export const UpdateQuestion = createAction(
  '[AddQuestion]-UpdateQuestion',
  props<{ id: string; userId: string; updatedQuestion: AddQuestions }>()
);
export const UpdateQuestionSuccess = createAction(
  '[AddQuestion]-UpdateQuestionSuccess',
  props<{ message: string }>()
);
export const UpdateQuestionFailure = createAction(
  '[AddQuestion]-UpdateQuestionFailure',
  props<{ message: string }>()
);

export const deleteQuestion = createAction(
  '[Single Component]-deleteQuestion',
  props<{ id: string }>()
);
export const deleteQuestionSuccess = createAction(
  '[Single Component]-deleteQuestionSuccess',
  props<{ message: string }>()
);
export const deleteQuestionFailure = createAction(
  '[Single Component]-deleteQuestionFailure',
  props<{ message: string }>()
);

export const GetSingleQuestion = createAction(
  '[SingleQuestion]-GetSimgleQuestion',
  props<{ id: string }>()
);

export const GetOneQuestion = createAction(
  '[Questions] Get one Question',
  props<{ id: string }>()
);
export const GetOneQuestionSuccess = createAction(
  '[OneQuestions] GetQuestionSuccess',
  props<{ question: Questions }>()
);
export const GetOneQuestionFailure = createAction(
  '[OneQuestions] GetQuestionFailure',
  props<{ error: string }>()
);
