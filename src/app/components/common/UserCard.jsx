import React from "react";

const UserCard = ({ img, name, badge }) => {
    // const styleBadge = ` p-1 text-base font-medium opacity-50 uppercase rounded-md shadow-md ${
    //     badge.color === "primary"
    //         ? "bg-primary"
    //         : badge.color === "danger"
    //         ? "bg-danger"
    //         : badge.color === "warning"
    //         ? "bg-warning"
    //         : "bg-white"
    // }`;
    const backGroundColor = "bg-" + badge.color;
    const styleBadge = ` p-1 text-base font-medium opacity-50 uppercase rounded-md shadow-md ${backGroundColor}`;

    console.log({ styleBadge });

    return (
        <div className="relative w-80 h-52 bg-white rounded-2xl shadow-2xl hover:h-450px transition-all delay-75 duration-500 group">
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
                    <div className="flex justify-between my-5 text-base text-gray-700 leading-5 font-semibold translate-y-2 group-hover:translate-y-0 duration-200">
                        <h3>
                            342
                            <br />
                            <span className=" text-sm font-normal opacity-50">
                                Hours
                            </span>
                        </h3>
                        <h3>
                            342 <br />
                            <span className=" text-sm font-normal opacity-50">
                                Minutes
                            </span>
                        </h3>
                    </div>
                    <div className="mb-2 flex justify-between gap-5">
                        <button className="py-2 px-5 rounded-md border-none outline-0 text-base font-medium bg-pink-500 text-white">
                            Подробнее
                        </button>
                        <button className="py-2 px-5 rounded-md  outline outline-2 outline-gray-500 text-base font-medium bg-white text-gray-500">
                            В избанное
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
