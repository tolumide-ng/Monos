import {
    UPDATE_USER_FAILURE,
    UPDATE_USER_PENDING,
    UPDATE_USER_SUCCESS,
} from "./actionTypes";

export interface FetchUpdateUserStateDef {
    readonly error: string | null;
    readonly status: string;
    readonly user: {};
}

export interface FetchUpdateUserPendingActionDef {
    type: typeof UPDATE_USER_PENDING;
    payload: FetchUpdateUserStateDef;
}

export interface FetchUpdateUserFailureActionDef {
    type: typeof UPDATE_USER_FAILURE;
    payload: FetchUpdateUserStateDef;
}

export interface FetchUpdateUserSuccessActionDef {
    type: typeof UPDATE_USER_SUCCESS;
    payload: FetchUpdateUserStateDef;
}

export type FetchUpdateUserActionTypeDefs =
    | FetchUpdateUserPendingActionDef
    | FetchUpdateUserFailureActionDef
    | FetchUpdateUserSuccessActionDef;
