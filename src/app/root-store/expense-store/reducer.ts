import {createReducer, on, Action} from '@ngrx/store';
import {initialState, featureAdapter, State} from './state';
import * as featureAction from './actions';

const featureReducer = createReducer(
  initialState,
  on(featureAction.addExpense, (state, {expense}) =>
    featureAdapter.addOne(expense, {...state})
  ),
  on(featureAction.load, state => ({...state})),
  on(featureAction.loadSuccess, (state, {expenses}) =>
    featureAdapter.addAll(expenses, {...state})
  ),
  on(featureAction.selectExpense, (state, {id}) => ({
    ...state,
    selectedExpenseId: id,
  })),
  on(featureAction.expenseSaved, (state, {expense: expense}) => {
    return featureAdapter.updateOne(expense, {...state});
  })
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
