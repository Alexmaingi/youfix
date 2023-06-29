import { GetOneQuestion } from './../Actions/questionAction';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as QuestionActions from '../Actions/questionAction';
import { Questions } from 'src/app/Interface';

export interface QuestionInterface {
  totalPages: any;
  question: Questions[];
  oneQuestion: Questions | null;
  getQuestionError: string;
  addQuestionSuccess: string;
  addQuestionFailure: string;
  updateQuestionSuccess: string;
  updateQuestionFailure: string;
  oneQuestionSuccess: string;
  oneQuestionFailure: string;
  deleteQuestionSuccess: string;
  deleteQuestionFailure: string;
  questionId: string;
  myQuestion: Questions[];
  myQuestionError: string;
}

const initialState: QuestionInterface = {
  question: [],
  oneQuestion: null,
  getQuestionError: '',
  addQuestionSuccess: '',
  addQuestionFailure: '',
  updateQuestionSuccess: '',
  updateQuestionFailure: '',
  oneQuestionSuccess: '',
  oneQuestionFailure: '',
  deleteQuestionSuccess: '',
  deleteQuestionFailure: '',
  questionId: '',
  myQuestion: [],
  myQuestionError: '',
  totalPages: undefined,
};

//selectors
const getQuestionState = createFeatureSelector<QuestionInterface>('question');
export const getQuestion = createSelector(
  getQuestionState,
  (state) => state.question
);
export const getQuestionError = createSelector(
  getQuestionState,
  (state) => state.getQuestionError
);
export const getQuestionId = createSelector(
  getQuestionState,
  (state) => state.questionId
);
export const getMyQuestion = createSelector(
  getQuestionState,
  (state) => state.myQuestion
);
// export const selectQuestion = createSelector(
//   getQuestionState,
//   (state) => state.question.oneQuestion
// );

export const questionReducer = createReducer(
  initialState,
  on(QuestionActions.GetQuestionSuccess, (state, action): QuestionInterface => {
    return {
      ...state,
      getQuestionError: '',
      question: action.Questions,
    };
  }),
  on(QuestionActions.GetQuestionFailure, (state, action): QuestionInterface => {
    return {
      ...state,
      getQuestionError: action.errorMessage,
      question: [],
    };
  }),

  on(QuestionActions.GetSingleQuestion, (state, action): QuestionInterface => {
    return {
      ...state,
      questionId: action.id,
    };
  }),
  on(QuestionActions.AddQuestionSuccess, (state, action): QuestionInterface => {
    return {
      ...state,
      addQuestionFailure: '',
      addQuestionSuccess: action.message,
    };
  }),

  on(QuestionActions.AddQuestionFailure, (state, action): QuestionInterface => {
    return {
      ...state,
      addQuestionFailure: action.message,
      addQuestionSuccess: ' ',
    };
  }),

  on(
    QuestionActions.UpdateQuestionSuccess,
    (state, action): QuestionInterface => {
      return {
        ...state,
        updateQuestionFailure: '',
        updateQuestionSuccess: action.message,
      };
    }
  ),

  on(
    QuestionActions.UpdateQuestionFailure,
    (state, action): QuestionInterface => {
      return {
        ...state,
        updateQuestionFailure: action.message,
        updateQuestionSuccess: ' ',
      };
    }
  ),
  on(
    QuestionActions.deleteQuestionSuccess,
    (state, action): QuestionInterface => {
      return {
        ...state,
        deleteQuestionFailure: '',
        deleteQuestionSuccess: action.message,
      };
    }
  ),

  on(
    QuestionActions.deleteQuestionFailure,
    (state, action): QuestionInterface => {
      return {
        ...state,
        deleteQuestionFailure: action.message,
        deleteQuestionSuccess: ' ',
      };
    }
  ),

  on(
    QuestionActions.GetMyQuestioSuccess,
    (state, action): QuestionInterface => {
      return {
        ...state,
        myQuestion: action.Questions,
        myQuestionError: '',
      };
    }
  ),

  on(
    QuestionActions.GetMyQuestionFailure,
    (state, action): QuestionInterface => {
      return {
        ...state,
        myQuestion: [],
        myQuestionError: action.errorMessage,
      };
    }
  ),
  //   on(QuestionActions.GetOneQuestion, (state, action) => {
  //     return {
  //       ...state,
  //       loaded: true,
  //     };
  //   }),
  //   on(QuestionActions.GetOneQuestionSuccess, (state, action) => ({
  //     ...state,
  //     oneQuestionFailure: '',
  //     oneQuestionSuccess: action.question
  //   })),
  //   on(QuestionActions.GetOneQuestionFailure, (state, { error }) => ({
  //     ...state,
  //     loaded: false,
  //     error: error,
  //   }))
  // );

  on(QuestionActions.GetOneQuestion, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(QuestionActions.GetOneQuestionSuccess, (state, action) => ({
    ...state,
    oneQuestion: action.question,
    loading: false,
    error: null,
  })),

  on(QuestionActions.GetOneQuestionFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
