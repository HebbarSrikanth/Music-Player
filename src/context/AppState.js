import React, { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import songData from "../util";
import Types from "./types";

const AppState = (props) => {
    //Import Songs that are required
    const songs = songData();

    //Add and initialise the starting data
    const initialState = {
        songs: songs,
        currentSong: songs[0],
        showLibrary: false,
        isPlaying: false,
    };

    //Use Reducer to provide the state and dispatch function
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Functions that modifies the state of the overall application
    const setSongs = (songs) => {
        dispatch({
            type: Types.SET_SONGS,
            payload: songs,
        });
    };

    const setCurrentSong = (currentSong) => {
        dispatch({
            type: Types.SET_CURRENTSONG,
            payload: currentSong,
        });
    };

    const setLibrary = () => {
        dispatch({
            type: Types.SET_LIBRARY,
        });
    };

    const setPlaying = () => {
        dispatch({
            type: Types.SET_PLAYING,
        });
    };

    return (
        <AppContext.Provider
            value={{
                songs: state.songs,
                currentSong: state.currentSong,
                showLibrary: state.showLibrary,
                isPlaying: state.isPlaying,
                setSongs,
                setCurrentSong,
                setLibrary,
                setPlaying,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
