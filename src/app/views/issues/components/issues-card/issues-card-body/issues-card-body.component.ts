import { Component, Input, OnInit } from '@angular/core';
import { IssueItemInterface } from '../../../../../shared/models/issue-item-interface.model';

@Component({
  selector: 'app-issues-card-body',
  templateUrl: './issues-card-body.component.html',
  styleUrls: ['./issues-card-body.component.scss']
})
export class IssuesCardBodyComponent implements OnInit {
  @Input() item: IssueItemInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
