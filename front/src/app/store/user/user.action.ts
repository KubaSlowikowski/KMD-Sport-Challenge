import { createAction, props } from "@ngrx/store";
import { UserModel } from "./models";

export class UserActions {
    public static readonly login = createAction(
        '[User Actions] Login',
    );

    public static readonly handleCallback = createAction(
        '[User Actions] Handle Callback',
        props<{ token: string }>(),
    );

    public static readonly handleCallbackSuccess = createAction(
        '[User Actions] Handle Callback Success',
        props<{ claims: UserModel, token: string }>(),
    );

    public static readonly handleCallbackError = createAction(
        '[User Actions] Handle Callback Error',
        props<{ error: any }>(),
    );

    public static readonly restoreSession = createAction(
        '[User Actions] Restore Session',
        props<{ claims: UserModel, token: string }>(),
    );

    public static readonly logout  = createAction(
        '[User Actions] Logout',
    );
}
