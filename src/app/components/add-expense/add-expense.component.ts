import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {MatSnackBar} from '@angular/material';
import {Store} from '@ngrx/store';

import {RootStoreState, ExpenseStoreActions} from 'src/app/root-store';
import {Expense} from 'src/app/models';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
  providers: [DatePipe],
})
export class AddExpenseComponent {
  form: FormGroup;
  addexpense: Expense;

  constructor(
    private fb: FormBuilder,
    private store: Store<RootStoreState.State>,
    private matSnackBar: MatSnackBar,
    private datePipe: DatePipe
  ) {
    this.form = fb.group({
      expenseCategory: ['', [Validators.required]],
      itemName: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      expenseDate: ['', [Validators.required]],
    });
  }

  login() {
    let value = this.form.value;
    this.addexpense = {
      id: Math.floor(Math.random() * Math.floor(100)),
      expenseCategory: value.expenseCategory,
      itemName: value.itemName,
      amount: value.amount,
      expenseDate: this.datePipe.transform(value.expenseDate, 'MM/dd/yyyy'),
    };
    this.store.dispatch(
      ExpenseStoreActions.addExpense({expense: this.addexpense})
    );
  }

  openAddExpenseAlert(message: string, action) {
    let snackBar = this.matSnackBar.open(message, action, {duration: 2000});
    snackBar.afterDismissed().subscribe(() => console.log('The expense Added'));
    snackBar
      .onAction()
      .subscribe(() => console.log('The expense Added dismissed'));
  }
}
