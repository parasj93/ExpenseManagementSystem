import {createAction, props} from '@ngrx/store';
import {Expense} from 'src/app/models';
import {Update} from '@ngrx/entity';

export const load = createAction('[App Component] Load');

export const loadSuccess = createAction(
  '[Expense API] Load Success',
  props<{expenses: Expense[]}>()
);

export const addExpense = createAction(
  '[Add Expense] Add Expense Page',
  props<{expense: Expense}>()
);

export const selectExpense = createAction(
  '[Edit Expense] Edit Expense Page',
  props<{id: number}>()
);

export const expenseSaved = createAction(
  '[Save Expense] Edit Expense Page',
  props<{expense: Update<Expense>}>()
);
