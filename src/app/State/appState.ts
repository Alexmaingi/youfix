import { AuthState } from '../Interface';
import { AnswerInterface } from './Reducers/answerReducer';
import { QuestionInterface } from './Reducers/questionReducer';
import { UserInterface } from './Reducers/userReducer';
// import { UserInterface } from './Reducers/userReducer';

export interface AppState {
  users: UserInterface;
  // user: UserInterface;
  question: QuestionInterface;
  auth: AuthState;
  answers: AnswerInterface;
}
