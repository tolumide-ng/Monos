import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";
import { fetchUsersReducer } from "./allUsers/reducer";
import { fetchUpdateUserReducer } from "./specificUser/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
    fetchUsersReducer,
    fetchUpdateUserReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
