import { combineReducers } from "redux";
import { dropDownReducer } from "./dropDown/reducer";
import { fetchUsersReducer } from "./allUsers/reducer";

export const rootReducer = combineReducers({
    dropDownReducer,
    fetchUsersReducer,
});

export type RootStateDef = ReturnType<typeof rootReducer>;

export default rootReducer;
