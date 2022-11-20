import React from "react";
// Components
import NavBar from "../components/common/NavBar";

const UsersLayout = ({ children }) => {
    return (
        <div className=" bg-gradient-to-r from-sky-500 to-indigo-500">
            <NavBar />
            {children}
        </div>
    );
};

export default UsersLayout;
