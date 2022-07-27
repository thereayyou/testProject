import React from 'react';
import GameStarted from "./GameStarted";
import {useSelector} from "react-redux";

const GameStartedController = () => {

    const gameStarted = useSelector(store => store.gameMainPage.gameStarted)
    return <GameStarted gameStarted={gameStarted}/>
}

export default GameStartedController;