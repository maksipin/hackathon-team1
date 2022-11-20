import React from "react";
import img from "../../../../img/member2.jpg";
import vk from "./userPageSocialSvg/vk.svg";
import tg from "./userPageSocialSvg/tg.svg";
import git from "./userPageSocialSvg/git.svg";
import ProgressBar from "../../common/ProgressBar";
const UserPage = () => (
    <div className="w-full min-h-[750px] mx-auto mt-20">
        <div className="w-[350px] h-[350px] relative max-h-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:h-[750px] hover:w-[950px] transition-all delay-75 duration-500 group mx-auto">
            <div className="">
                <div className="flex justify-between px-4 pt-4">
                    <button
                        className="inline-block rounded-lg text-sm p-1.5"
                        type="button"
                    >
                        <span className="sr-only">Open dropdown</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        </svg>
                    </button>
                    <button>
                        <span className="sr-only">Add to favourite</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 hover:fill-red-600 text-red-600"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg group-hover:scale-150 group-hover:mb-20 transition-all delay-75 duration-500"
                        src={img}
                        alt="member img"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Sergey Medvedev
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Visual Designer
                    </span>
                    <div>
                        <b className="mr-2">возраст:</b>
                        <span className="text-sm">25 лет</span>
                    </div>
                    <div>
                        <ul className="flex">
                            <li>
                                <a href="">
                                    <img src={vk} alt="vk" width="36px" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={tg} alt="tg" width="36px" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={git} alt="git" width="36px" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <span className="group-hover:hidden">Узнать больше</span>
                    <div className="hidden group-hover:w-[750px] group-hover:inline-block ml-10 opacity-0 group-hover:opacity-100">
                        <div className=" ">
                            <p>О Себе:</p>
                            <p>
                                lorem lorem lorem lorem lorem lorem lorem lorem
                                lorem lorem lorem lorem lorem lorem lorem lorem
                                lorem lorem lorem lorem lorem lorem lorem lorem
                                lorem lorem lorem lorem lorem lorem lorem lorem
                                lorem lorem lorem lorem
                            </p>
                        </div>
                        <ProgressBar />
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mt-2 group-hover:mt-[80px] delay-75 duration-500"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </div>
);

export default UserPage;
