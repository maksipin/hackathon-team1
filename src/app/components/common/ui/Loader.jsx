import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Loader = ({ downLoadTeam, loadFinish }) => {
    const history = useHistory();

    if (downLoadTeam.start === false) return;
    const loaderTextArr = [
        "Надеваем наушники и наслаждаемся",
        "Ищем лучших ...",
        "Отправляем приглашение...",
        "Встречаем!!!",
        "Team #1"
    ];

    const [items, setItems] = useState([]);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        setItems(loaderTextArr);
    }, []);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
            console.log("1", slideNumber);
        } else {
            slideNumber = (slide + direction) % items.length;
            console.log("2", slideNumber);
        }

        setSlide(slideNumber);
    };

    useEffect(() => {
        if (slide === items.length - 1) {
            loadFinish((prefState) => ({ ...prefState, loaderFinish: true }));
            history.push("/");
            return;
        }
        const interval = setInterval(() => {
            changeSlide(1);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

    return (
        <div className="text-7xl  text-blue-200 ">
            {slide === items.length - 1 ? (
                <h1 className="animate-none tracking-widest border-b-2 text-center border-blue-200 font-bold">
                    {items[slide]}
                </h1>
            ) : (
                <h1 className="animate-slideText text-center">
                    {items[slide]}
                </h1>
            )}
        </div>
    );
};

export default Loader;
