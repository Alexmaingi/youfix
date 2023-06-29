import { GetQuestion, UpdateQuestion } from './../Actions/questionAction';
import { Injectable } from '@angular/core';
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
import * as QuestionActions from '../Actions/questionAction';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';
import { QuestionService } from 'src/app/Services/question.service';
@Injectable()
export class QuestionEffects {
  constructor(
    private action$: Actions,
    private questionSevice: QuestionService
  ) {}

  // getQuestion$ = createEffect(() => {
  //   return this.action$.pipe(
  //     ofType(QuestionActions.GetQuestion),
  //     mergeMap((action) => {
  //       return this.questionSevice.getQuestions().pipe(
  //         //success
  //         map((Questions) => {
  //           return QuestionActions.GetQuestionSuccess({ Questions });
  //         }),
  //         //error
  //         catchError((error) =>
  //           of(QuestionActions.GetQuestionFailure({ errorMessage: error }))
  //         )
  //       );
  //     })
  //   );
  // });
  getQuestion$ = createEffect(() => {
    return this.action$.pipe(
      ofType(QuestionActions.GetQuestion),
      mergeMap((action) => {
        const { pageNumber, pageSize } = action; // Destructure the action arguments
        return this.questionSevice.getQuestions(pageNumber, pageSize).pipe(
          map((Questions) => QuestionActions.GetQuestionSuccess({ Questions })),
          catchError((error) =>
            of(QuestionActions.GetQuestionFailure({ errorMessage: error }))
          )
        );
      })
    );
  });

  getOneQuestion$ = createEffect(() =>
    this.action$.pipe(
      ofType(QuestionActions.GetOneQuestion),
      exhaustMap((action) =>
        this.questionSevice.getOneQuestion(action.id).pipe(
          map((question) => {
            return QuestionActions.GetOneQuestionSuccess({ question });
          }),
          catchError((error: any) =>
            of(QuestionActions.GetOneQuestionFailure(error))
          )
        )
      )
    )
  );

  addQuestion$ = createEffect(() => {
    return this.action$.pipe(
      ofType(QuestionActions.Addquestion),
      concatMap((action) => {
        return this.questionSevice
          .addQuestion(action.userId, action.newQuestion)
          .pipe(
            map((m) =>
              QuestionActions.AddQuestionSuccess({ message: m.message })
            ),
            catchError((error) =>
              of(QuestionActions.AddQuestionFailure({ message: error }))
            )
          );
      })

      //Refresh Behaviour
      // switchMap(() => [QuestionActions.GetQuestion()])
    );
  });

  updateQuestion$ = createEffect(() => {
    return this.action$.pipe(
      ofType(QuestionActions.UpdateQuestion),
      mergeMap((action) => {
        return this.questionSevice
          .updateQuestion(action.id, action.userId, action.updatedQuestion)
          .pipe(
            map((ms) =>
              QuestionActions.UpdateQuestionSuccess({ message: ms.message })
            ),
            catchError((error) =>
              of(QuestionActions.UpdateQuestionFailure({ message: error }))
            )
          );
      })
    );
  });

  deleteQuestion$ = createEffect(() => {
    return this.action$.pipe(
      ofType(QuestionActions.deleteQuestion),
      mergeMap((action) => {
        return this.questionSevice.deleteQuestion(action.id).pipe(
          map((ms) =>
            QuestionActions.deleteQuestionSuccess({ message: ms.message })
          ),
          catchError((error) =>
            of(QuestionActions.deleteQuestionFailure({ message: error }))
          )
        );
      })
    );
  });
}
