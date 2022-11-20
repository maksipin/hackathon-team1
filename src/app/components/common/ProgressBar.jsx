import React from "react";

const ProgressBar = () => {
    return (
        <div className="mt-5">
            <h3 className="mb-2">Прогресс:</h3>
            <h3>HTML</h3>
            <div className="w-[450px] mt-3 bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-gradient-to-r from-red-300 to-indigo-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[89%]">
                    {" "}
                    89%
                </div>
            </div>
            <div>
                <h3>JS</h3>
                <div className="w-[450px] mt-3 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-indigo-500 to-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[95%]">
                        {" "}
                        95%
                    </div>
                </div>
            </div>
            <div>
                <h3>REACT</h3>
                <div className="w-[450px] mt-3 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-green-500 to-yellow-300 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[100%]">
                        {" "}
                        100%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
