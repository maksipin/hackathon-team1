import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../../store/usersSlice/actions";
import { getUsersLoadingStatus } from "../../store/usersSlice/selectors";
import CreateTeamButton from "../common/ui/CreateTeam";
import Loader from "../common/ui/Loader";

const Main = () => {
    const dispatch = useDispatch();
    const isLoad = useSelector(getUsersLoadingStatus);
    const [createTeam, setCreateTeam] = useState({
        start: false,
        loaderFinish: false
    });

    useEffect(() => {
        if (!isLoad) dispatch(loadUsers());
    }, [createTeam.start]);

    const styleCreateTeamButton = !createTeam.start
        ? "absolute right-1/2 top-1/2 -translate-x-36"
        : "absolute right-44 -translate-x-36 top-2";

    return (
        <div className="relative m-0">
            <div className={styleCreateTeamButton}>
                <CreateTeamButton
                    setCreateTeam={setCreateTeam}
                    createTeam={createTeam}
                />
            </div>

            <div className="flex flex-col justify-center items-center min-h-screen  ">
                <div className="m-20">
                    <Loader
                        downLoadTeam={createTeam}
                        loadFinish={setCreateTeam}
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
