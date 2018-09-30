import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Memo } from './memo';

const URL = 'http://localhost:3000/data';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class MemoHttpService {
  constructor(private http: HttpClient) {}

  getMemos(): Observable<Memo[]> {
    return this.http.get<Memo[]>(URL);
  }

  addMemo(memo: Memo): Observable<number> {
    return this.http.post<Memo>(URL, memo, HTTP_OPTIONS).pipe(
      map(memo => memo.id)
    );
  }

  removeMemo(id: number): Observable<any> {
    return this.http.delete(URL + '/' + id);
  }
}
