const USER_ID = "userId";
const FAVOUTITE = "favourite";

export const setData = (userId, favourite) => {
    localStorage.setItem(userId, favourite);
    // localStorage.setItem(FAVOUTITE, favourite);
};

export const getUserId = () => localStorage.getItem(USER_ID);

export const getFavourite = (userId) => localStorage.getItem(userId);

export const removeData = (userId) => {
    localStorage.removeItem(userId);
    localStorage.removeItem(FAVOUTITE);
};

const localStorageService = { setData, getUserId, getFavourite, removeData };

export default localStorageService;
