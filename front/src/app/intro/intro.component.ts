import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { UserActions, UserState } from '../store/user';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  constructor (private store: Store<UserState>) {
    
  }

  public login(): void {
    this.store.dispatch(UserActions.login());
  }
}
