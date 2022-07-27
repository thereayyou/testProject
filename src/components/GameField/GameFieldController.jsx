import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import GameField from "./GameField";

const GameFieldController = () => {

    const gameField = useSelector(store => store.gameData.gameField)

    const activeLevel = useSelector(store => store.gameData.activeLevel)

    const dispatch = useDispatch();

    const setLevel = () => {
        dispatch({
            type: 'SET_ACTIVE_LEVEL'
        })
    }

    const cleanGame = () => {
        dispatch({
            type: 'GAME_END',
        })
    }

    const setVisible = (id) => {
        dispatch({
            type: 'SET_VISIBLE_ELEMENT',
            payload: {
                id
            }
        })
    }


    return <GameField gameField={gameField}
                      activeLevel={activeLevel}
                      setLevel={setLevel}
                      cleanGame={cleanGame}
                      setVisible={setVisible}/>

};

export default GameFieldController;