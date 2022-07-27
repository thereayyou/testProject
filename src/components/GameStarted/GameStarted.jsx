import React from 'react';
import GameMainPageContainer from "../MainPage/GameMainPageController";
import GameFieldController from "../GameField/GameFieldController";

const GameStarted = (props) => {
    if (props.gameStarted) {
        return <GameFieldController />
    }
    return <GameMainPageContainer />
};

export default GameStarted;