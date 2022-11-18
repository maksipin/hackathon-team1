import {
    UsersRequested,
    UsersRequestSuccess,
    UsersRequestFailure
} from "./slice";
import UserService from "../../services/UsersService";

export const loadUsers = () => async (dispatch) => {
    try {
        dispatch(UsersRequested());
        const data = await UserService.fetchAll();
        dispatch(UsersRequestSuccess(data));
    } catch (error) {
        dispatch(UsersRequestFailure("Error"));
    }
};
