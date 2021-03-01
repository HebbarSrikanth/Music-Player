import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Song = () => {
    const appState = useContext(AppContext);
    const { currentSong, isPlaying } = appState;
    const spin_playing = { animation: "spin 60s linear infinite", animationPlayState: "running" };
    const spin_stop = { ...spin_playing, animationPlayState: "paused" };
    return (
        <div className="song-container">
            <img style={isPlaying ? spin_playing : spin_stop} src={currentSong.coverPicture} alt={currentSong.name} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};

export default Song;
