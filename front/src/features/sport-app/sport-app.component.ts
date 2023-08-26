import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions, UserState } from 'src/app/store/user';

@Component({
  selector: 'app-sport-app',
  templateUrl: './sport-app.component.html',
  styleUrls: ['./sport-app.component.scss']
})
export class SportAppComponent {

  constructor(private store: Store<UserState>) {
    
  }

  public logout(): void {
    this.store.dispatch(UserActions.logout());
  }
}
