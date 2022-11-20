// import React, { useEffect } from "react";
// // Libs
// import { useDispatch, useSelector } from "react-redux";
// // Components
// import { getUsersLoadingStatus } from "../store/usersSlice/selectors";
// import { loadUsers } from "../store/usersSlice/actions";

const AppLoader = ({ children }) => {
    // const dispatch = useDispatch();
    // const usersStatus = useSelector(getUsersLoadingStatus);

    // useEffect(() => {
    //     dispatch(loadUsers());
    // }, []);

    // if (usersStatus) return <>Loading...</>;

    return children;
};

export default AppLoader;
