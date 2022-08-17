export interface IssueItemInterface {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: any;
  labels: any[];
  state: string;
  assigne: any;
  comments: number;
  created_at: any;
  updated_at: any;
  closed_at: any;
  pull_request: any;
  body: string;
  score: number;
}
