import {Expense} from './expense.interface';

export interface ExpenseResult {
  type: string;
  value: Expense[];
}
