import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Expense, ExpenseResult} from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private API_BASE_URL = '/assets/data/expenses.json';
  constructor(private http: HttpClient) {}
  getExpense(): Observable<Expense[]> {
    return this.http
      .get<ExpenseResult>(this.API_BASE_URL)
      .pipe(map(result => result.value));
  }
}
