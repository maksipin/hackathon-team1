import React, { useEffect, useState } from "react";
import UserCard from "../../common/UserCard";
import Loader from "../../common/ui/Loader";
import CreateTeamButton from "../../common/ui/CreateTeam";
import { useDispatch, useSelector } from "react-redux";
import {
    getUsers,
    getUsersLoadingStatus
} from "../../../store/usersSlice/selectors";
import { loadUsers } from "../../../store/usersSlice/actions";

const MainPage = () => {
    const team = useSelector(getUsers);
    const dispatch = useDispatch();
    const isLoad = useSelector(getUsersLoadingStatus);

    const [createTeam, setCreateTeam] = useState({
        start: false,
        loaderFinish: false
    });

    useEffect(() => {
        if (isLoad) {
            setCreateTeam((prefState) => ({
                ...prefState,
                loaderFinish: true
            }));
        }
    }, []);

    useEffect(() => {
        if (!isLoad) dispatch(loadUsers());
    }, [createTeam.start]);

    const styleCreateTeamButton = !createTeam.start
        ? "absolute right-1/2 top-1/2 -translate-x-36"
        : "absolute right-44 -translate-x-36 top-2";

    const styleCard = createTeam.loaderFinish
        ? "m-10 flex justify-center items-center min-w-screen flex-wrap animate-slideCard "
        : "hidden";

    return (
        <div className="relative m-0">
            {!createTeam.loaderFinish ? (
                <div className={styleCreateTeamButton}>
                    <CreateTeamButton
                        setCreateTeam={setCreateTeam}
                        createTeam={createTeam}
                    />
                </div>
            ) : null}
            <div className="flex flex-col justify-center items-center min-h-screen  ">
                {!createTeam.loaderFinish ? (
                    <div className="m-20">
                        <Loader
                            downLoadTeam={createTeam}
                            loadFinish={setCreateTeam}
                        />
                    </div>
                ) : (
                    <h1 className="animate-none tracking-widest border-b-2 text-center border-blue-200 font-bold text-7xl  text-blue-200">
                        Team #1
                    </h1>
                )}
                <div className={styleCard}>
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
