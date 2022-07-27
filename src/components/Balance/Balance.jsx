import React from 'react';
import b from "../Balance/Balance.module.css";

const Balance = (props) => {
    return (
        <div>
            <div className={b.mainPageBalance}>
                Баланс: {props.balance} ₽
            </div>
        </div>
    );
};

export default Balance;