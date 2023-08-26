import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.state";

const getUserState = createFeatureSelector<UserState>('userFeature');

export class UserSelectors {
    public static readonly getClaims = createSelector(
        getUserState,
        (state) => state.claims
    );

    public static readonly getToken = createSelector(
        getUserState,
        (state) => state.token
    );

    public static readonly getError = createSelector(
        getUserState,
        (state) => state.error
    );
}
