import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState, ExpenseStoreActions} from './root-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.store.dispatch(ExpenseStoreActions.load());
  }

  opened: boolean = true;
}
