import React from "react";
// Components
import NavBar from "../components/common/NavBar";

const UsersLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};

export default UsersLayout;
