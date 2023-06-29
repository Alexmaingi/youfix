import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as UserActions from '../Actions/userAction';
import { User } from 'src/app/Interface';

export interface UserInterface {
  user: User[];
  getUserError: string;
  addUserSuccess: string;
  addUserFailure: string;
  updateUserSuccess: string;
  updateUserFailure: string;
  oneUserSuccess: string;
  oneUserFailure: string;
  deleteUserSuccess: string;
  deleteUserFailure: string;
}

const initialState: UserInterface = {
  user: [],
  getUserError: '',
  addUserSuccess: '',
  addUserFailure: '',
  updateUserSuccess: '',
  updateUserFailure: '',
  oneUserSuccess: '',
  oneUserFailure: '',
  deleteUserSuccess: '',
  deleteUserFailure: '',
};

//selectors
const getUserState = createFeatureSelector<UserInterface>('question');
export const getUser = createSelector(getUserState, (state) => state.user);
export const getUserError = createSelector(
  getUserState,
  (state) => state.getUserError
);

export const questionReducer = createReducer(
  initialState,
  on(UserActions.getUserSuccess, (state, action): UserInterface => {
    return {
      ...state,
      getUserError: '',
      user: action.user,
    };
  }),
  on(UserActions.getUserFailure, (state, action): UserInterface => {
    return {
      ...state,
      getUserError: action.error,
      user: [],
    };
  })
);
