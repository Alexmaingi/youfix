import { Comment } from './../../Interface/index';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as CommentActions from '../Actions/commentAction';

export interface CommentInterface {
  comment: Comment[];
  getCommentError: string;
  addCommentSuccess: string;
  addCommentFailure: string;
  answerId: string;
}

const initialState: CommentInterface = {
  comment: [],
  getCommentError: '',
  addCommentSuccess: '',
  addCommentFailure: '',
  answerId: '',
};

const getCommentState = createFeatureSelector<CommentInterface>('comment');
export const getComment = createSelector(
  getCommentState,
  (state) => state.comment
);
export const getCommentError = createSelector(
  getCommentState,
  (state) => state.getCommentError
);
export const getCommentId = createSelector(
  getCommentState,
  (state) => state.answerId
);

export const commentReducer = createReducer(
  initialState,
  on(CommentActions.GetCommentSuccess, (state, action): CommentInterface => {
    return {
      ...state,
      getCommentError: '',
      comment: action.comment,
    };
  }),
  on(CommentActions.GetCommentFailure, (state, action): CommentInterface => {
    return {
      ...state,
      getCommentError: action.errorMessage,
      comment: [],
    };
  }),

  on(CommentActions.AddCommentSuccess, (state, action): CommentInterface => {
    return {
      ...state,
      getCommentError: '',
      comment: state.comment,
      addCommentSuccess: action.message,
    };
  }),

  on(CommentActions.AddCommentFailure, (state, action): CommentInterface => {
    return {
      ...state,
      getCommentError: action.message,
      addCommentSuccess: ' ',
    };
  })
);
