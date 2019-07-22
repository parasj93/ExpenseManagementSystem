import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as featureActions from './actions';
import {concatMap, map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

import {DataService} from 'src/app/services';

@Injectable()
export class ExpenseStoreEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private router: Router
  ) {}

  loadRequesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(featureActions.load),
      concatMap(_ =>
        this.dataService
          .getExpense()
          .pipe(map(expenses => featureActions.loadSuccess({expenses})))
      )
    )
  );

  updateSelectedExpenseEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(featureActions.selectExpense),
        tap(_ => {
          this.router.navigate(['/editExpense']);
        })
      ),
    {dispatch: false}
  );
}
