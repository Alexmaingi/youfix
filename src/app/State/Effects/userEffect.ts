import { Injectable } from '@angular/core';
import * as actions from '../Actions/userAction';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of, switchMap } from 'rxjs';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {}
  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.getUsers),
      mergeMap((action) =>
        this.userService.getUsers().pipe(
          map((Users) => {
            console.log(Users);
            return actions.getUsersSuccess({ users: Users });
          }),
          catchError((error: any) => of(actions.getUsersFailure(error)))
        )
      )
    );
  });
}
