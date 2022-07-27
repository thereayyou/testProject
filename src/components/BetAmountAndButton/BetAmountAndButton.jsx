import React, {useRef} from 'react';
import b from './BetAmountAndButton.module.css';
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";

const BetAmountAndButton = (props) => {

    let newBetAmount = React.createRef();
    let onChangeBetAmount = () => {
        let number = newBetAmount.current.value;
        props.updateBetAmount(number)
    }

    let placeABet = () => {
        props.updateBalanceAfterBet();
    }

    return (
        <div className={b.betAmountMain}>
            <div className={b.inputAndButton}>
                <TextField
                    className={b.input}
                    inputProps={{inputMode:'numeric', pattern: ['0-9*']}}
                    type="number"
                    placeholder="Введите сумму ставки"
                    inputRef={newBetAmount}
                    onChange={onChangeBetAmount}
                    value={props.betAmount}/>
                <Button
                    variant={"contained"}
                    onClick={placeABet}>
                    Сделать ставку
                </Button>
            </div>
        </div>
    );
};

export default BetAmountAndButton;