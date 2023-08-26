import { createFeature, createReducer, on } from "@ngrx/store";
import { UserState } from "./user.state";
import { UserActions } from "./user.action";

const initialState: UserState = {
    claims: null,
    token: null,
    error: null,
};

const reducer = createReducer(
    initialState,
    on(UserActions.handleCallback, (state) => ({
        ...initialState,
    })),
    on(UserActions.handleCallbackSuccess, UserActions.restoreSession, (state, { claims, token }) => ({
        ...state,
        claims,
        token,
    })),
    on(UserActions.handleCallbackError, (state, { error }) => ({
        ...state,
        error,
    })),
    on(UserActions.logout, (state) => ({
        ...initialState,
    })),
);

export const userFeature = createFeature({
    name: 'userFeature',
    reducer,
});
