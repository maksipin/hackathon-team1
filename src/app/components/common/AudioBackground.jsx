import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import audio from "../../../audio/we_will_rock_you.mp3";

const AudioBackground = () => {
    const [statusPlayAudio, setStatusAudio] = useState("none");

    function playingMusic() {
        setStatusAudio("play");
    }
    function stopingMusic() {
        setStatusAudio("stop");
    }
    console.log({ statusPlayAudio });

    const opacityPlayer = `transition-opacity delay-500 duration-1000 ${
        statusPlayAudio === "none" ? "opacity-0" : "opacity-100"
    }`;

    return (
        <div className={opacityPlayer}>
            <ReactAudioPlayer
                src={audio}
                autoPlay
                controls
                preload="auto"
                onPlay={playingMusic}
                onPause={stopingMusic}
            />
        </div>
    );
};

export default AudioBackground;
