import actionTypes from "../actionTypes";
import { user as initialState } from "../index";
import {
    FetchUpdateUserStateDef,
    FetchUpdateUserActionTypeDefs,
} from "../types";

const updateUserTypes = [...actionTypes];

export const fetchUpdateUserReducer = (
    state = initialState,
    fetchUpdateUserProps: FetchUpdateUserActionTypeDefs
): FetchUpdateUserStateDef => {
    return updateUserTypes.includes(fetchUpdateUserProps.type)
        ? { ...state, ...fetchUpdateUserProps.payload }
        : state;
};

export default fetchUpdateUserReducer;
