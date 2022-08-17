import { Component, OnInit } from '@angular/core';
import { IssuesFacade } from '../../../../store/issues.facade';
import { Observable, tap } from 'rxjs';
import { Issue } from '../../../../shared/models/issue.interface';

@Component({
  selector: 'app-issues-card',
  templateUrl: './issues-card.component.html',
  styleUrls: ['./issues-card.component.scss'],
})
export class IssuesCardComponent implements OnInit{
  issues$!: Observable<Issue>
  constructor(private issuesFacade: IssuesFacade) {
  }

  ngOnInit(): void {
    this.issues$ = this.issuesFacade.selectIssues$;
  }
}
