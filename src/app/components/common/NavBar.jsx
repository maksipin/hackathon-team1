import React from "react";
// Libs
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className=" shadow-md">
            <ul className="flex justify-center text  text-blue-200 font-medium uppercase text-lg">
                <li className="m-2 p-5 pt-6  hover:-translate-y-1 transition duration-300 hover:text-pink-200">
                    <Link to="/">Home</Link>
                </li>
                <li className=" m-2  border-r-2 border-r-blue-200 shadow-lg">
                    {/* <Link to="/auth">Profile</Link> */}
                </li>
                <li className="m-2 p-5 pt-6 hover:-translate-y-1 transition duration-300 hover:text-pink-200">
                    <Link to="/favourite">Favourite</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
