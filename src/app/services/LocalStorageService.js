const USERS = "users";
const AUTH = "auth";

export const createNewUser = (data) => {
    const users = JSON.parse(localStorage.getItem(USERS));
    users.push(data);
    localStorage.setItem(USERS, JSON.stringify(users));
    localStorage.setItem(
        AUTH,
        JSON.stringify({ _id: data._id, email: data.email })
    );
};

export const logIn = (data) => {
    localStorage.setItem(AUTH, JSON.stringify(data));
};

export const getUsers = () => JSON.parse(localStorage.getItem(USERS));

export const getAuth = () => JSON.parse(localStorage.getItem(AUTH));

export const logOut = () => {
    localStorage.removeItem(AUTH);
};

const localStorageService = {
    createNewUser,
    logIn,
    logOut,
    getUsers,
    getAuth
};

export default localStorageService;
