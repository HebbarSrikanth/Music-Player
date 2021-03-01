import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../context/AppContext";

const Nav = () => {
    const appState = useContext(AppContext);
    const { showLibrary, setLibrary } = appState;
    return (
        <nav className="nav">
            <h3>Waves</h3>
            <button onClick={() => setLibrary(!showLibrary)}>
                Library <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    );
};

export default Nav;
