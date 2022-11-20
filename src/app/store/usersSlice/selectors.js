export const getUsers = (state) => state.users.items;

export const getUsersLoadingStatus = (state) => state.users.loading;

export const getUserError = (state) => state.users.error;

export const getUsersById = (Id) => (state) =>
    state.users.items.filter((item) => {
        return item._id === Id;
    });
