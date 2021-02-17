import { axiosCall } from "../../../../utilities/helpers/axiosCall";
import { AppThunk, StoreActionPropsDefs } from "../../types";
import {
    UPDATE_USER_FAILURE,
    UPDATE_USER_PENDING,
    UPDATE_USER_SUCCESS,
} from "../actionTypes";

export const fetchUpdateUsersPending = () => ({
    type: UPDATE_USER_PENDING,
    payload: {
        status: "fetchUpdateUsersPending",
        error: null,
        user: [],
    },
});

export const fetchUpdateUsersFailure = (error: null | string) => ({
    type: UPDATE_USER_FAILURE,
    payload: {
        status: "fetchUpdateUsersFailure",
        error,
        user: [],
    },
});

export const fetchUpdateUserSuccess = (user: []) => ({
    type: UPDATE_USER_SUCCESS,
    payload: {
        status: "fetchUpdateUserSuccess",
        error: null,
        user,
    },
});

export const fetchUpdateUserAction = (
    props: StoreActionPropsDefs
): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchUpdateUsersPending());
        const response = await axiosCall(props);
        dispatch(fetchUpdateUserSuccess(response?.data));
    } catch (error) {
        dispatch(fetchUpdateUsersFailure(error?.message ?? ""));
    }
};
