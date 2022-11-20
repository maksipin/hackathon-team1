import { useEffect } from "react";
// // Libs
// import { useDispatch } from "react-redux";
// // Components
// import { loadUsers } from "../store/usersSlice/actions";

const AppLoader = ({ children }) => {
    // const dispatch = useDispatch();

    const initialize = () => {
        localStorage.setItem("users", JSON.stringify([]));
    };

    useEffect(() => {
        initialize();
        // dispatch(loadUsers());
    }, []);

    return children;
};

export default AppLoader;
