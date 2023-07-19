import { User } from 'src/app/Interface';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as UserActions from '../Actions/userAction';

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
const getUserState = createFeatureSelector<UserInterface>('user');
export const getUsers = createSelector(
  getUserState,
  (state: UserInterface) => state.user
);

export const getUserError = createSelector(
  getUserState,
  (state) => state.getUserError
);

export const userReducer = createReducer(
  initialState,
  on(UserActions.getUsersSuccess, (state, { users }) => {
    console.log('Received users:', users);
    console.log('Current state:', state);
    return { ...state, users: [...users] };
  }),
  on(UserActions.getUserFailure, (state, action): UserInterface => {
    return {
      ...state,
      getUserError: action.error,
      user: [],
    };
  })
);
