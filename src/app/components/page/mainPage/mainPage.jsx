import React from "react";
import UserCard from "../../common/UserCard";
import team from "../../../mockData/team.json";
import AudioBackground from "../../common/AudioBackground";
import { PlayIcon } from "@heroicons/react/24/solid";
import Loader from "../../common/ui/Loader";

const MainPage = () => {
    return (
        <div className="relative m-0">
            <Loader />
            <div className="flex items-center absolute  right-1/2 bottom-20">
                <div className="flex items-center">
                    <h1 className="font-semibold text-2xl"> Создать команду</h1>
                    <PlayIcon className="h-6 w-6 text-blue-100 translate-x-9" />
                </div>
                <AudioBackground />
            </div>
            <div className="m-10 flex justify-between items-center min-h-screen">
                {team.map((member) => (
                    <UserCard key={member.id} {...member} />
                ))}
            </div>
        </div>
    );
};

export default MainPage;
