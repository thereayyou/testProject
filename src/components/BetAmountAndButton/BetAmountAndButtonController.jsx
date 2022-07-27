import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import BetAmountAndButton from "./BetAmountAndButton";
import {betAmountActionCreator, updateBalanceAfterBetActionCreator} from "../../redux/game-main-page-reducer";

const BetAmountAndButtonController = () => {

    const betAmount = useSelector(store => store.gameMainPage.betAmount)

    const dispatch = useDispatch();

    const updateBetAmount = (number) => {
        dispatch(betAmountActionCreator(number))
    }

    const updateBalanceAfterBet = () => {
        dispatch(updateBalanceAfterBetActionCreator())
    }

    return (
            <BetAmountAndButton updateBetAmount={updateBetAmount} updateBalanceAfterBet={updateBalanceAfterBet} betAmount={betAmount}/>
    );
};

export default BetAmountAndButtonController;