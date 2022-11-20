import users from "../mockData/team.json";

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(users);
        }, 2000);
    });

export default {
    fetchAll
};
