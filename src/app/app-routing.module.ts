import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ExpensesComponent} from './container/expenses/expenses.component';
import {SettingComponent} from './container/setting/setting.component';
import {ProfileComponent} from './container/profile/profile.component';
import {AddExpenseComponent} from './components/add-expense/add-expense.component';
import {EditExpenseComponent} from './container/edit-expense/edit-expense.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensesComponent,
  },
  {
    path: 'settings',
    component: SettingComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'addExpense',
    component: AddExpenseComponent,
  },
  {
    path: 'editExpense',
    component: EditExpenseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
