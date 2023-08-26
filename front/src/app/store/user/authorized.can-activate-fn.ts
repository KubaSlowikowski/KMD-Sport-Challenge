import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { UserState } from "./user.state";
import { UserSelectors } from "./user.selector";
import { map } from "rxjs";

export const authorizedCanActivateFn: CanActivateFn =
    () => {
        const store = inject(Store<UserState>);
        const router = inject(Router);
        return store.select(UserSelectors.getClaims).pipe(
            map(user => user != null ? true : router.parseUrl('')),
        )
    };
