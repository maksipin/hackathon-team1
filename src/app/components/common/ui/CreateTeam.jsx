import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import AudioBackground from "../AudioBackground";

const CreateTeamButton = ({ setCreateTeam, createTeam }) => {
    return (
        <div className="flex items-center absolute  ">
            {!createTeam.start && (
                <div className="flex items-center ">
                    <h1 className="font-semibold text-2xl w-52 text-blue-200">
                        Создать команду
                    </h1>
                    <PlayIcon className="h-8 w-8 text-blue-200 translate-x-9 translate-y-1  shadow-lg rounded-full" />
                </div>
            )}
            <AudioBackground start={setCreateTeam} />
        </div>
    );
};

export default CreateTeamButton;
