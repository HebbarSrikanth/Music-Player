import React, { useContext } from "react";
import Nav from "./Nav";
import Song from "./Song";
import Player from "./Player";
import Library from "./Library";
import AppContext from "../context/AppContext";

const HomeScreen = () => {
    const appState = useContext(AppContext);
    const { showLibrary } = appState;
    return (
        <div className={`container ${showLibrary ? "library-active" : ""}`}>
            <Nav />
            <Song />
            <Player />
            <Library />
        </div>
    );
};

export default HomeScreen;
