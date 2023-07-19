import { Answer } from '../../Interface/index';
import { createAction, props } from '@ngrx/store';

export const GetComment = createAction(
  '[Comment] Get Comments',
  props<{ answerId: string }>()
);
export const GetCommentSuccess = createAction(
  '[Comment]-GetCommentSuccess',
  props<{ comment: Comment[] }>()
);
export const GetCommentFailure = createAction(
  '[Comment]-GetCommentFailure',
  props<{ errorMessage: string }>()
);

export const AddComment = createAction(
  '[AddComment]-AddComment',
  props<{ questionId: string; uid: string; answer: Answer }>()
);
export const AddCommentSuccess = createAction(
  '[AddComment]-AddCommentSuccess',
  props<{ message: string }>()
);
export const AddCommentFailure = createAction(
  '[AddComment]-AddCommentFailure',
  props<{ message: string }>()
);
