import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../models/issue.interface';

@Injectable()
export class ApiService {

  constructor(private readonly httpClient: HttpClient) {}

  getOpenRepos(phrase: string): Observable<Issue> {
    const queryParam = `is:open is:issue archived:false ${phrase}`
    return this.httpClient.get<Issue>('https://api.github.com/search/issues', {params: {q: queryParam}});
  }
}
