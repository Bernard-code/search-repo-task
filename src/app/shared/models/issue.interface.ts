import { IssueItemInterface } from './issue-item-interface.model';

export interface Issue {
  incomplete_results: boolean;
  total_count: number;
  items: IssueItemInterface[];
}
