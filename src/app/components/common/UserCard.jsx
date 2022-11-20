import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    addFavoriteUser,
    delStatusFavoriteUserById,
    getStatusFavoriteUserById
} from "../../services/LocalStorageService";
// import { getFavourite, setData } from "../../services/LocalStorageService";

const UserCard = ({ _id, img, name, badge, age, location, level }) => {
    const [favourite, setFavourite] = useState(false);

    useEffect(() => {
        const status = getStatusFavoriteUserById(_id);
        setFavourite(status);
    }, []);

    const styleFavourite = favourite
        ? "py-2 px-5 rounded-md border-none outline-0 text-base font-medium bg-pink-500 text-white"
        : "py-2 px-5 rounded-md text-base font-medium outline outline-2 outline-gray-500   bg-white text-gray-500";

    const backGroundColor = badge.color;
    const styleBadge =
        "p-1 text-base font-medium opacity-50 uppercase rounded-md shadow-md " +
        backGroundColor;

    const styleCardHover = `relative w-80 h-52 bg-white rounded-2xl shadow-2xl  transition-all delay-75 duration-500 ${
        _id === "сurator" ? "" : "hover:h-450px group"
    }`;

    const favouriteButtonClicked = (id) => {
        if (favourite) {
            delStatusFavoriteUserById(id);
            setFavourite(false);
        } else {
            addFavoriteUser(id);
            setFavourite(true);
        }
    };

    return (
        <div className={styleCardHover}>
            <div className="absolute left-1/2 -top-14 -translate-x-1/2 w-40 h-40 bg-white rounded-3xl shadow-md overflow-hidden group-hover:h-64 group-hover:w-64 transition-all  duration-700">
                <img className="absolute" src={img} alt="avatar" />
            </div>
            <div className="absolute w-full h-full flex justify-center items-end overflow-hidden">
                <div className="px-6 py-7 text-center w-full transition-all delay-75 duration-500 translate-y-32 group-hover:translate-y-0 ">
                    <div className="flex flex-col">
                        <h2 className=" m-2 text-xl font-semibold text-gray-900 leading-5">
                            {name}
                        </h2>
                        <span className={styleBadge}>{badge.name}</span>
                    </div>
                    <div className="flex justify-center  text-base text-gray-700 leading-5 font-semibold translate-y-2 group-hover:translate-y-0 duration-200">
                        <h3 className="mx-7 my-5">
                            {age}
                            <br />
                            <span className=" text-sm font-normal opacity-50">
                                Age
                            </span>
                        </h3>
                        <h3 className="mx-7 my-5 mr-3">
                            {level} <br />
                            <span className=" text-sm font-normal opacity-50">
                                Level
                            </span>
                        </h3>
                        <h3 className="mx-7 my-5">
                            {location} <br />
                            <span className=" text-sm font-normal opacity-50">
                                Location
                            </span>
                        </h3>
                    </div>
                    <div className="mb-2 flex justify-between gap-5">
                        <Link to={`/users/${_id}`}>
                            <button className="py-2 px-5 rounded-md border-none outline-0 text-base font-medium bg-pink-500 text-white">
                                Подробнее
                            </button>
                        </Link>
                        <button
                            className={styleFavourite}
                            onClick={() => favouriteButtonClicked(_id)}
                        >
                            В избанное
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
