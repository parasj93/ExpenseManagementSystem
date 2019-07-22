import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import {Expense} from 'src/app/models';

@Component({
  selector: 'app-expense-card-list',
  templateUrl: './expense-card-list.component.html',
  styleUrls: ['./expense-card-list.component.scss'],
})
export class ExpenseCardListComponent implements OnInit {
  @Input() expenses: Expense[];
  @Input() loading: boolean;
  @Output() selectExpense = new EventEmitter<Expense>();
  dataSource = new MatTableDataSource(this.expenses);

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = [
    'Edit',
    'expenseCategory',
    'itemName',
    'amount',
    'expenseDate',
  ];
}
