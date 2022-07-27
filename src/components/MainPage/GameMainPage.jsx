import React from 'react';
import m from './GameMainPage.module.css';
import BetAmountAndButtonController from "../BetAmountAndButton/BetAmountAndButtonController";

const GameMainPage = (props) => {
    return (
        <div className={m.mainPageContainer}>
            <BetAmountAndButtonController />
        </div>
    );
};

export default GameMainPage;