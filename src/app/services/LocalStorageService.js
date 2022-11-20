const USERS = "users";
const AUTH = "auth";
const FAVOURITE = "favourite";

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

export const addFavoriteUser = (data) => {
    const users = JSON.parse(localStorage.getItem(FAVOURITE));
    if (users) {
        users.push(data);
        localStorage.setItem(FAVOURITE, JSON.stringify(users));
    } else {
        localStorage.setItem(FAVOURITE, JSON.stringify([data]));
    }
};
export const getStatusFavoriteUserById = (id) => {
    const users = JSON.parse(localStorage.getItem(FAVOURITE));
    if (users) {
        return users.find((item) => item === id);
    }
    return false;
};
export const getFavoriteUser = () => {
    const users = JSON.parse(localStorage.getItem(FAVOURITE));
    if (users) return users;
    return [];
};

export const delStatusFavoriteUserById = (id) => {
    const users = JSON.parse(localStorage.getItem(FAVOURITE));
    const filtredUsers = users.filter((item) => item !== id);
    localStorage.setItem(FAVOURITE, JSON.stringify(filtredUsers));
};

const localStorageService = {
    createNewUser,
    logIn,
    logOut,
    getUsers,
    getAuth,
    addFavoriteUser,
    getFavoriteUser,
    getStatusFavoriteUserById,
    delStatusFavoriteUserById
};

export default localStorageService;
