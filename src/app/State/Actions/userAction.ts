// import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/Interface';
import { createAction, props } from '@ngrx/store';

//get all Users
export const getUsers = createAction('[Users] Get All Users');

export const getUsersSuccess = createAction(
  '[Users API] Users Load Success',
  props<{ users: User[] }>()
);
export const getUsersFailure = createAction(
  '[Users API] Users Load Failure',
  props<{ error: any }>()
);

//get one User
export const getUser = createAction(
  '[Products] Get one User',
  props<{ id: string }>()
);
export const getUserSuccess = createAction(
  '[Users API] Users Load Success',
  props<{ user: User[] }>()
);
export const getUserFailure = createAction(
  '[Users API] Users Load Failure',
  props<{ error: string }>()
);

//delete User
export const deleteUser = createAction(
  '[Users] Delete User',
  props<{ name: string }>()
);
export const deleteUserSuccess = createAction(
  '[Users API] Delete User Success',
  props<{ message: string }>()
);
export const deleteUserFailure = createAction(
  '[Users API] Delete User Failure',
  props<{ error: string }>()
);

// export function GetUserFailure(
//   GetUserFailure: any,
//   arg1: (
//     state: import('../Reducers/userReducer').QuestionInterface,
//     action: any
//   ) => UserInterface
// ): import('@ngrx/store').ReducerTypes<
//   import('../Reducers/userReducer').QuestionInterface,
//   readonly import('@ngrx/store').ActionCreator[]
// > {
//   throw new Error('Function not implemented.');
// }
