import { LoginUser } from './../../Interface/index';
import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import * as AnswerAction from '../Actions/answerAction';
import { catchError, concatMap, map, mergeMap, of, switchMap } from 'rxjs';
import { AnswersService } from 'src/app/Services/answers.service';
@Injectable()
export class AnswerEffects {
  constructor(private action$: Actions, private answerSevice: AnswersService) {}

  getAnswer$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AnswerAction.GetAnswer),
      mergeMap((action) => {
        return this.answerSevice.getAnswers(action.questionId).pipe(
          //success
          map((Answer) => {
            return AnswerAction.GetAnswerSuccess({ Answer });
          }),
          //error
          catchError((error) =>
            of(AnswerAction.GetAnswerFailure({ errorMessage: error }))
          )
        );
      })
    );
  });

  addAnswer$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AnswerAction.Addanswer),
      concatMap((action) => {
        return this.answerSevice
          .addAnswers(action.questionId, action.answer)
          .pipe(
          
            
            map((m) => 
        
            AnswerAction.AddAnswerSuccess({ message: m.message })),
            catchError((error) =>
              of(AnswerAction.AddAnswerFailure({ message: error }))
            )
          );
      })
    );
  });
}
