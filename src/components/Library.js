import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import LibrarySongs from "./LibrarySongs";

const Library = () => {
    const appState = useContext(AppContext);
    const { songs, showLibrary } = appState;
    return (
        <div className={`library-container ${showLibrary ? "active-library" : ""}`}>
            <h2>Library</h2>
            <div>
                {songs.map((song) => (
                    <LibrarySongs key={song.id} currentSong={song} />
                ))}
            </div>
        </div>
    );
};

export default Library;
