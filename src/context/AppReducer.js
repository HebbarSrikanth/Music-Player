import Types from "./types";

const AppReducer = (state, action) => {
    switch (action.type) {
        case Types.SET_SONGS:
            return {
                ...state,
                songs: [...action.payload],
            };

        case Types.SET_CURRENTSONG:
            return {
                ...state,
                currentSong: action.payload,
            };

        case Types.SET_LIBRARY:
            return {
                ...state,
                showLibrary: !state.showLibrary,
            };

        default:
            return state;
    }
};

export default AppReducer;
