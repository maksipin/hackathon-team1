import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="text-red-800 text-center align-middle font-bold">
            <h1>Hello Team</h1>
            <Link to="/logout">Log out</Link>
        </div>
    );
};

export default MainPage;
