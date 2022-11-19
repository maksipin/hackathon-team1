import React from "react";
// Libs
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/auth">Profile</Link>
                </li>
                <li>
                    <Link to="/favourite">Favourite</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
