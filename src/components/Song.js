import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Song = () => {
    const appState = useContext(AppContext);
    const { currentSong } = appState;
    return (
        <div className="song-container">
            <img src={currentSong.coverPicture} alt={currentSong.name} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};

export default Song;
