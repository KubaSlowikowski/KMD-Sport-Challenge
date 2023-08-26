import { CanActivateFn, Router } from "@angular/router";
import { UserState } from "./user.state";
import { Store } from "@ngrx/store";
import { inject } from "@angular/core";
import { UserSelectors } from "./user.selector";
import { map } from "rxjs";

export const unauthorizedCanActivateFn: CanActivateFn =
    () => {
        const store = inject(Store<UserState>);
        const router = inject(Router);
        return store.select(UserSelectors.getClaims).pipe(
            map(user => user == null ? true : router.parseUrl('/app')),
        )
    };
