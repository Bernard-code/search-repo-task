import { ApiService } from '../shared/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as issuesActions from './issues.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class IssuesEffects {
  getIssues$ = createEffect(() => this.actions$.pipe(
      ofType(issuesActions.getIssues),
      switchMap(action =>
        this.apiService.getOpenRepos(action.phrase).pipe(
          map(issues => issuesActions.getIssuesSuccess({issues})),
          catchError(error => of(issuesActions.getIssuesFailure({error})))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {
  }
}
