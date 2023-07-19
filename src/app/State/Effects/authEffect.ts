import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from '../Actions/authAction';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signUp),
      exhaustMap((action) =>
        this.authService.signUp(action.payload).pipe(
          map((response) => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('payload', JSON.stringify(response.payload));
            localStorage.setItem('id', response.id);
            this.router.navigate(['']);
            return AuthActions.signUpSuccess({ message: response.message });
          }),
          catchError((error) => {
            let errorMessage = error?.error?.message || 'An error occurred.';
            if (errorMessage.indexOf('Violation of UNIQUE KEY') !== -1) {
              const startIndex = errorMessage.indexOf('(');
              const endIndex = errorMessage.indexOf(')');
              const duplicateValue = errorMessage.substring(
                startIndex + 1,
                endIndex
              );

              errorMessage = `Someone is already using ${duplicateValue}`;
            }

            return of(AuthActions.signUpFailure({ error: errorMessage }));
          })
        )
      )
    )
  );

  signin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.signIn),
      exhaustMap((action) =>
        this.authService.signIn(action.payload).pipe(
          map((response) => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('payload', JSON.stringify(response.payload));
            localStorage.setItem('id', response.id);
            localStorage.setItem('role', response.role);
            this.router.navigate(['']);
            return AuthActions.signInSuccess({ message: response.message });
          }),
          catchError((error) => {
            return of(
              AuthActions.signInFailure({
                error: error?.error?.message || 'An error occurred.',
              })
            );
          })
        )
      )
    );
  });

  signOut = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signOut),
      tap(() => localStorage.clear)
    )
  );
}
