// Libs
import { nanoid } from "nanoid";
// Components
import {
    UsersRequested,
    UsersRequestSuccess,
    UsersRequestFailure,
    AuthRequestSuccess,
    AuthRequestFailed,
    UserLogOut,
    CreateUserRequestSuccess
} from "./slice";

import UserService from "../../services/UsersService";
import { createAction } from "@reduxjs/toolkit";
import { customHistory } from "./../../utils/CustomHistory";
import localStorageService from "./../../services/LocalStorageService";

const AuthRequest = createAction("users/AuthRequest");
const CreateUserRequest = createAction("users/CreateUserRequest");
const CreateUserRequestFailed = createAction("users/CreateUserRequestFailed");

export const loadUsers = () => async (dispatch) => {
    try {
        dispatch(UsersRequested());
        const data = await UserService.fetchAll();
        dispatch(UsersRequestSuccess(data));
    } catch (error) {
        dispatch(UsersRequestFailure("Error"));
    }
};

export const signUp =
    ({ email, password, name, ...rest }) =>
    (dispatch) => {
        const _id = nanoid(10);
        try {
            dispatch(AuthRequest());

            const users = localStorageService.getUsers();
            for (const el of users) {
                if (el.email === email) {
                    throw new Error("Такой Email существует");
                }
            }

            localStorageService.setData({
                _id,
                email,
                name,
                password,
                img: `https://avatars.dicebear.com/api/avataaars/${(
                    Math.random() + 1
                )
                    .toString(36)
                    .substring(7)}.svg`
            });

            dispatch(
                createUser({
                    _id,
                    img: `https://avatars.dicebear.com/api/avataaars/${(
                        Math.random() + 1
                    )
                        .toString(36)
                        .substring(7)}.svg`,
                    auth: {
                        email,
                        password
                    },
                    ...rest
                })
            );

            dispatch(AuthRequestSuccess({ _id }));

            customHistory.push("/");
        } catch (error) {
            dispatch(AuthRequestFailed({ register: error.message }));
        }
    };

const createUser = (data) => (dispatch) => {
    try {
        dispatch(CreateUserRequest());
        dispatch(CreateUserRequestSuccess(data));
    } catch (error) {
        dispatch(CreateUserRequestFailed());
    }
};

export const signIn =
    ({ email, password }) =>
    (dispatch, getState) => {
        try {
            dispatch(AuthRequest());
            let flag = false;

            const users = localStorageService.getUsers();
            for (const el of users) {
                if (el.email === email) {
                    if (el.password === password) {
                        flag = true;
                        break;
                    }
                }
            }

            if (!flag) {
                throw new Error(
                    "Problems with email or password. Check it and try again."
                );
            }

            dispatch(AuthRequestSuccess({ email, password }));
        } catch (error) {
            dispatch(AuthRequestFailed({ login: error.message }));
        }
    };

export const LoggedOut = () => (dispatch) => {
    dispatch(UserLogOut());
};

// export const UpdateData = () => async (dispatch) => {
//     try {
//         dispatch(UpdateUsers());
//     } catch (error) {
//         dispatch(CreateUserRequestFailed(error.message));
//     }
// };
