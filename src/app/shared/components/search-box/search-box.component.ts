import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { catchError, distinctUntilChanged, filter, interval, Subject, switchMap, takeUntil, tap, throttle } from 'rxjs';
import { ApiService } from '../../services';
import { IssuesFacade } from '../../../store/issues.facade';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  searchForm!: FormGroup;
  destroyed$: Subject<void> = new Subject<void>();

  constructor(private issuesFacade: IssuesFacade) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.searchForm = new FormGroup({
      searchPhrase: new FormControl('')
    });
    this.searchForm?.get('searchPhrase').valueChanges.pipe(
      takeUntil(this.destroyed$),
      filter(val => val.length > 2),
      throttle(() => interval(500)),
      distinctUntilChanged()
    ).subscribe(phrase => this.issuesFacade.getIssues(phrase));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}
