export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  about: string;
  role: string;
  title: string;
  isDeleted: number;
}

export interface AddQuestions {
  title: string;
  body: string;
  tags: string[];
}

export interface Questions {
  id: string;
  userId: string;
  title: string;
  body: string;
  date: string;
  tag_names: string;
  username: string;
}

export interface Answer {
  id: string;
  userId: string;
  questionId: string;
  body: string;
  isAccepted: string;
}

export interface Comment {
  id: string;
  userId: string;
  answerId: string;
  body: string;
}

export interface NewUser {
  username: string;
  email: string;
  password: string;
}

export interface AddUserSuccess {
  token: string;
  message: string;
  payload: {
    username: string;
    id: string;
    role: string;
  };
  id: string;
}

export interface AddQuestionSuccess {
  message: string;
}
export interface LoginUser {
  email: string;
  password: string;
}
export interface LogUserSuccess {
  token: string;
  role: string;
  message: string;
}

export interface AddAnswerSuccess {
  message: string;
}

export interface AdminSuccess {
  message: string;
}

export interface AddCommentSuccess {
  message: string;
}
export interface UsersState {
  users: User[];
  currentUser: User | undefined;
  loading: boolean;
  error: string | null;
}
export interface AuthState {
  signingUp: boolean;
  signUpSuccess: boolean;
  signingIn: boolean;
  signInSuccess: boolean;
  error: string | null;
}
