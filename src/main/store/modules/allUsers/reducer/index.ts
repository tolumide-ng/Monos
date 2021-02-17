import actionTypes from "../actionTypes";
import { users as initialState } from "../index";
import { FetchUsersStateDef, FetchUsersActionTypeDefs } from "../types";

const userTypes = [...actionTypes];

export const fetchUsersReducer = (
    state = initialState,
    fetchUsersProps: FetchUsersActionTypeDefs
): FetchUsersStateDef => {
    return userTypes.includes(fetchUsersProps.type)
        ? { ...state, ...fetchUsersProps.payload }
        : state;
};

export default fetchUsersReducer;
