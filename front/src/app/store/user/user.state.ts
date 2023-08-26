import { UserModel } from "./models";

export interface UserState {
    claims: UserModel | null;
    token: string | null;
    error: any | null;
}
