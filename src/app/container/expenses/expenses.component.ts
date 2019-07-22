import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';

import {
  RootStoreState,
  ExpenseStoreSelector,
  ExpenseStoreActions,
} from 'src/app/root-store';
import {Expense} from 'src/app/models';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  expenses$: Observable<Expense[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.expenses$ = this.store.pipe(
      select(ExpenseStoreSelector.selectAllExpenses)
    );

    this.isLoading$ = this.store.pipe(
      select(ExpenseStoreSelector.selectExpenseIsLoading)
    );
  }

  onSelect(expense: Expense) {
    this.store.dispatch(ExpenseStoreActions.selectExpense({id: expense.id}));
  }
}
