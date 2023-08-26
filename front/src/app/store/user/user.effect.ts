import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserActions } from "./user.action";
import { catchError, filter, map, of, tap, withLatestFrom } from "rxjs";
import { Router } from "@angular/router";
import { UserState } from "./user.state";
import { Store } from "@ngrx/store";
import { UserSelectors } from "./user.selector";

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private store: Store<UserState>,
    ) { }

    login$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.login),
        tap(_ => {
            window.location.href = `http://localhost:4200/auth-callback?token=eyJhdGhsZXRlSWQiOjEsICJhdGhlbGV0ZU5hbWUiOiJNUCJ9`;
        }),
    ), { dispatch: false });

    handleCallback$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.handleCallback),
        map(({ token }) => ({ claims: JSON.parse(atob(token)), token })),
        map(args => UserActions.handleCallbackSuccess({ ...args })),
        catchError(error => of(UserActions.handleCallbackError({ error }))),
    ));

    handleCallbackSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.handleCallbackSuccess),
        tap(_ => {
            this.router.navigate(['/app']);
        }),
    ), { dispatch: false });

    restoreSession$ = createEffect(() => of(localStorage.getItem('sport-app-token')).pipe(
        filter(token => token != null),
        map(token => token ?? ''),
        withLatestFrom(this.store.select(UserSelectors.getToken)),
        filter(([token, currentToken]) => token !== currentToken),
        map(([token, currentToken]) => token),
        map(token => ({ claims: JSON.parse(atob(token)), token })),
        map(args => UserActions.restoreSession({ ...args })),
    ));

    saveSession$ = createEffect(() => this.store.select(UserSelectors.getToken).pipe(
        filter(token => token != null),
        tap(token => {
            localStorage.setItem('sport-app-token', token as string);
        }),
    ), { dispatch: false });

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.logout),
        tap(_ => {
            localStorage.removeItem('sport-app-token');
            this.router.navigate(['']);
        }),
    ), { dispatch: false });
}
