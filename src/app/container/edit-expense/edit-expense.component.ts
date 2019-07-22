import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {DatePipe} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {
  RootStoreState,
  ExpenseStoreSelector,
  ExpenseStoreActions,
} from 'src/app/root-store';
import {Expense} from 'src/app/models';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss'],
  providers: [DatePipe],
})
export class EditExpenseComponent implements OnInit {
  form: FormGroup;
  update: Expense;
  constructor(
    private store: Store<RootStoreState.State>,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.form = this.fb.group({
      expenseCategory: ['', [Validators.required]],
      itemName: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      expenseDate: ['', [Validators.required]],
    });
  }
  expense$: Expense;
  ngOnInit() {
    this.store
      .pipe(select(ExpenseStoreSelector.selectCurrentExpense))
      .subscribe(data => {
        if (data === null) {
          this.router.navigate(['/']);
        } else {
          this.expense$ = data;
          this.expense$.expenseDate = this.datePipe.transform(
            this.expense$.expenseDate,
            'MM/dd/yyyy'
          );
          this.form = this.fb.group({
            expenseCategory: [
              this.expense$.expenseCategory,
              [Validators.required],
            ],
            itemName: [this.expense$.itemName, [Validators.required]],
            amount: [this.expense$.amount, [Validators.required]],
            expenseDate: [this.expense$.expenseDate, [Validators.required]],
          });
        }
      });
  }

  updateExpense() {
    let value = this.form.value;
    this.update = {
      id: value.id,
      expenseCategory: value.expenseCategory,
      itemName: value.itemName,
      amount: value.amount,
      expenseDate: this.datePipe.transform(value.expenseDate, 'MM/dd/yyyy'),
    };

    this.store.dispatch(
      ExpenseStoreActions.expenseSaved({
        expense: {id: this.update.id, changes: this.update},
      })
    );
  }
}
