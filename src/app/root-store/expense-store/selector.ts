import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State, featureAdapter} from './state';
import {Expense} from 'src/app/models';

export const selectExpenseState = createFeatureSelector<State>('expense');

export const selectAllExpenses: (
  state: Object
) => Expense[] = featureAdapter.getSelectors(selectExpenseState).selectAll;

export const selectExpenseIsLoading = createSelector(
  selectExpenseState,
  (state: State): boolean => state.isLoading
);

export const selectSelectedExpenseId = createSelector(
  selectExpenseState,
  (state: State): number => state.selectedExpenseId
);

export const selectCurrentExpense = createSelector(
  selectAllExpenses,
  selectSelectedExpenseId,
  (allExpenses: Expense[], selectedExpenseId: number) => {
    if (allExpenses && selectedExpenseId) {
      return allExpenses.find(p => p.id === selectedExpenseId);
    } else {
      return null;
    }
  }
);
