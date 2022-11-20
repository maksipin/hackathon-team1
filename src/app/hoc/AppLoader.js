// import React, { useEffect } from "react";
// // Libs
// import { useDispatch, useSelector } from "react-redux";
// // Components
// import { getUsersLoadingStatus } from "../store/usersSlice/selectors";
// import { loadUsers } from "../store/usersSlice/actions";

const AppLoader = ({ children }) => {
    // const dispatch = useDispatch();
    // const usersStatus = useSelector(getUsersLoadingStatus);


    const initialize = () => {
        localStorage.setItem("users", JSON.stringify([]));
    };

    useEffect(() => {
        initialize();
        dispatch(loadUsers());
    }, []);


    // if (usersStatus) return <>Loading...</>;

    return children;
};

export default AppLoader;
