import { createAction, props } from '@ngrx/store';
import { Issue } from '../shared/models/issue.interface';

export const getIssues = createAction(
  '[Issues actions] get issues list',
  props<{ phrase: string }>()
);
export const getIssuesSuccess = createAction(
  '[Issues actions] get issues list success',
  props<{ issues: Issue }>()
);
export const getIssuesFailure = createAction(
  '[Issues actions] get issues list failure',
  props<{ error: string }>()
);
