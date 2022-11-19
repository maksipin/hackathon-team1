import React from "react";

const Loader = () => {
    return (
        <div className="opacity-10">
            <h1 className="animate-slideText">Ищем лучших ...</h1>
            <h1 className="animate-slideText animation-delay-3s ">
                Отправляем приглашение...
            </h1>
            <h1 className="animate-slideText animation-delay-6s">
                Встречаем!!!
            </h1>
        </div>
    );
};

export default Loader;
