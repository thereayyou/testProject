import React from 'react';
import {useSelector} from "react-redux";
import Balance from "./Balance";

const BalanceController = () => {

    const balance = useSelector(store => store.gameMainPage.balance)
    return <Balance balance={balance}/>
};

export default BalanceController;