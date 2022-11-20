import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsersById } from "../../../store/usersSlice/selectors";
import UserCardPage from "../../common/UserCardPage";

const UserPage = () => {
    const { userId } = useParams();

    const team = useSelector(getUsersById(userId));

    return (
        <div className="relative m-0">
            <div>
                <UserCardPage {...team[0]} />
            </div>
        </div>
    );
};

export default UserPage;
