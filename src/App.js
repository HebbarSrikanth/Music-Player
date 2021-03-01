import React from "react";
import HomeScreen from "./components/HomeScreen";
import AppState from "./context/AppState";
import "./styles/app.scss";

const App = () => {
    return (
        <AppState>
            <HomeScreen />
        </AppState>
    );
};

export default App;
