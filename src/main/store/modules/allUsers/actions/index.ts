import { axiosCall } from "../../../../utilities/helpers/axiosCall";
import { AppThunk, StoreActionPropsDefs } from "../../types";
import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_PENDING,
    FETCH_USERS_SUCCESS,
} from "../actionTypes";

export const fetchUsersPending = () => ({
    type: FETCH_USERS_PENDING,
    payload: {
        status: "fetchUsersPending",
        error: null,
        users: [],
    },
});

export const fetchUsersFailure = (error: string | null) => ({
    type: FETCH_USERS_FAILURE,
    payload: {
        status: "fetchUsersFailure",
        error,
        users: [],
    },
});

export const fetchUsersSuccess = (users: []) => ({
    type: FETCH_USERS_SUCCESS,
    payload: {
        status: "fetchUsersSuccess",
        error: null,
        users,
    },
});

export const fetchUsersAction = (
    props: StoreActionPropsDefs
): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchUsersPending());
        const response = await axiosCall(props);
        dispatch(fetchUsersSuccess(response?.data));
    } catch (error) {
        dispatch(fetchUsersFailure(error?.message ?? ""));
    }
};
