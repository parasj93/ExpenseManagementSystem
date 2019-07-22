import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RootStoreModule} from './root-store';
import {ExpensesComponent} from './container/expenses/expenses.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExpenseCardListComponent} from './components/expense-card-list/expense-card-list.component';
import {SettingComponent} from './container/setting/setting.component';
import {ProfileComponent} from './container/profile/profile.component';
import {AddExpenseComponent} from './components/add-expense/add-expense.component';
import {EditExpenseComponent} from './container/edit-expense/edit-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpenseCardListComponent,
    SettingComponent,
    ProfileComponent,
    AddExpenseComponent,
    EditExpenseComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RootStoreModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
