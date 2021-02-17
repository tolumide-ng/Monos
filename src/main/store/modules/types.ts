import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootStateDef } from ".";
import { ForAxiosDefs, UserDef } from "../../commonTypes";

export interface RootState {
    dropDownReducer: {
        display: boolean;
    };

    fetchUsersReducer: {
        error: string | null;
        status: string;
        users: Array<UserDef>;
    };
    fetchUpdateUserReducer: {
        error: string | null;
        status: string;
        user: Object;
    };
}

export interface StoreActionPropsDefs {
    path: string;
    payload: {};
    method: ForAxiosDefs;
    params?: {};
}

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateDef,
    unknown,
    Action<string>
>;
