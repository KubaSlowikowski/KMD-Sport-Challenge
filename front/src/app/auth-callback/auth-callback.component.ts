import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserActions, UserSelectors, UserState } from '../store/user';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent {

  public vm$ = this.store.select(UserSelectors.getError).pipe(
    map(error => ({ error })),
  );

  constructor (private route: ActivatedRoute, private store: Store<UserState>) {
    this.route.queryParams.pipe(
      map(query => query['token']),
      take(1),
    ).subscribe(token => {
      this.handleCode(token);
    });
  }

  private handleCode(token: string): void {
    this.store.dispatch(UserActions.handleCallback({ token }))
  }
}
