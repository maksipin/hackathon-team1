const USERS = "users";

export const setData = (data) => {
    const users = JSON.parse(localStorage.getItem("users"));
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
};

export const getUsers = () => JSON.parse(localStorage.getItem("users"));

export const removeData = () => {
    localStorage.removeItem(USERS);
};

const localStorageService = {
    setData,
    removeData,
    getUsers
};

export default localStorageService;
