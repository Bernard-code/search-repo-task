import { Issue } from '../shared/models/issue.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface IssuesState {
  issues: Issue | null,
  loading: boolean,
  error: string
}

export const getIssueState = createFeatureSelector<IssuesState>('issuesReducer');

export const selectIssues = createSelector(
  getIssueState,
  (state) => state.issues
);
