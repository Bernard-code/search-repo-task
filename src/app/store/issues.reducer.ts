import { createReducer, on } from '@ngrx/store';
import { IssuesState } from './issues.selectors';
import * as issuesActions from './issues.actions';

export const initialState: IssuesState = {
  issues: null,
  loading: false,
  error: ''
};

export const issuesReducer = createReducer(
  initialState,
  on(issuesActions.getIssuesSuccess, (state, payload) => ({
    ...state,
    issues: payload.issues,
  })),
);
