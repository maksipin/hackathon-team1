const USER_ID = "userId";
const FAVOUTITE = "favourite";

export const setData = ({ userId, favourite }) => {
    localStorage.setItem(USER_ID, userId);
    localStorage.setItem(FAVOUTITE, favourite);
};

export const getUserId = () => localStorage.getItem(USER_ID);

export const getFavourite = () => localStorage.getItem(REFRESH_KEY);

export const removeData = () => {
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(FAVOUTITE);
};

const localStorageService = { setData, getUserId, getFavourite, removeData };

export default localStorageService;
