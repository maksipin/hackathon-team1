import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteUser } from "../../../services/LocalStorageService";
import { loadUsers } from "../../../store/usersSlice/actions";

import { getUsersById } from "../../../store/usersSlice/selectors";
import UserCard from "../../common/UserCard";

const FavouritePage = () => {
    const team = getFavoriteUser();
    const [favourite, setFavourite] = useState([]);
    const teams = team.map((item) => useSelector(getUsersById(item)));
    const dispatch = useDispatch();

    useEffect(() => {
        setFavourite(teams);
        dispatch(loadUsers());
    }, []);

    return (
        <div className="relative m-10 flex flex-col justify-center items-center min-h-screen  ">
            <div>
                <h1 className="text-center text-7xl  text-blue-200 ">
                    Избранное
                </h1>
            </div>
            <div className=" flex items-center min-h-screen  ">
                <div className="m-5 flex justify-center items-center min-w-screen flex-wrap animate-slideCard">
                    {favourite.length > 0 ? (
                        favourite.map((member) => {
                            console.log("member", member);
                            return (
                                <div className="m-14">
                                    <UserCard key={member.id} {...member[0]} />
                                </div>
                            );
                        })
                    ) : (
                        <div>
                            <h1 className="text-center text-7xl  text-blue-200 ">
                                Здесь никого нет
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FavouritePage;
