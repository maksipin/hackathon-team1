import React, { useEffect } from "react";
// Libs
import { useDispatch } from "react-redux";
// Components
import { LoggedOut } from "../store/usersSlice/actions";
import { useHistory } from "react-router-dom";

const LogOut = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(LoggedOut());
    }, []);

    history.push("/");

    return <h1>Loading</h1>;
};

export default LogOut;
