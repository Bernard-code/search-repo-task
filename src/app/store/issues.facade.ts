import { Store } from '@ngrx/store';
import * as issuesActions from './issues.actions';
import * as issuesSelectors from './issues.selectors';
import { Injectable } from '@angular/core';

@Injectable()
export class IssuesFacade {
  selectIssues$  = this.store.select(issuesSelectors.selectIssues);

  constructor(private store: Store<issuesSelectors.IssuesState>) {
  }

  getIssues(phrase: string): void {
    this.store.dispatch(issuesActions.getIssues({phrase}))
  }
}
