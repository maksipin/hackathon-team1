import React from "react";
import UserCard from "../../common/UserCard";

import { useSelector } from "react-redux";
import { getUsers } from "../../../store/usersSlice/selectors";
import ReactAudioPlayer from "react-audio-player";

import audio from "../../../../audio/we_will_rock_you.mp3";

const MainPage = () => {
    const team = useSelector(getUsers);

    return (
        <div className="relative m-0">
            <div className="absolute right-1/2 translate-x-40 top-2 m-5">
                <div className="opacity-100">
                    <ReactAudioPlayer src={audio} controls preload="auto" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center min-h-screen  ">
                <h1 className=" mt-20 animate-none tracking-widest border-b-2 text-center border-blue-200 font-bold text-7xl  text-blue-200">
                    Team #1
                </h1>
                <div className="m-10 flex justify-center items-center min-w-screen flex-wrap animate-slideCard">
                    {team.map((member) => (
                        <div className="m-14">
                            <UserCard key={member.id} {...member} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
