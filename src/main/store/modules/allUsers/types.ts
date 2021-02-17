import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_PENDING,
    FETCH_USERS_SUCCESS,
} from "./actionTypes";

export interface FetchUsersStateDef {
    readonly error: string | null;
    readonly status: string;
    readonly users: [];
}

export interface FetchUsersPendingActionDef {
    type: typeof FETCH_USERS_PENDING;
    payload: FetchUsersStateDef;
}

export interface FetchUsersFailureActionDef {
    type: typeof FETCH_USERS_FAILURE;
    payload: FetchUsersStateDef;
}

export interface FetchUsersSuccessActionDef {
    type: typeof FETCH_USERS_SUCCESS;
    payload: FetchUsersStateDef;
}

export type FetchUsersActionTypeDefs =
    | FetchUsersPendingActionDef
    | FetchUsersFailureActionDef
    | FetchUsersSuccessActionDef;
