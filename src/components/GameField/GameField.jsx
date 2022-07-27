import React from 'react';
import f from './GameField.module.css';
import Button from "@mui/material/Button";
import cn from 'classnames';

const GameField = (props) => {

    let testFunc = (value, id) => {
        if(value == 1) {
            props.setLevel()
            props.setVisible(id)
        } else {
            props.setVisible(id)
        }
    }

    let gameEnd = () => {
        props.cleanGame()
    }

    return (
        <div className={f.gameFieldMainClass}>
            {
                props.gameField.map((g) => {
                    return (
                        <div className={cn(f.lvlGameFieldAndCompleted, {
                            [f.disabled]: g.level !== props.activeLevel
                        })}>
                            <div className={f.gameField}>{g.valueField.map((v) => {
                                return (
                                    <div>
                                        <button value={`${v.value}`} onClick={() => testFunc(v.value, v.id)} className={cn(f.gameFieldButton, {
                                            [f.green]: v.visible && v.value === 1,
                                            [f.red]: v.visible && v.value === 0
                                        })}>{v.value}</button>
                                    </div>
                                )
                            })}</div>
                        </div>
                    )
                })
            }
            <div className={f.gameCoefficients}>
                <div>5</div>
                <div>4</div>
                <div>3</div>
                <div>2</div>
            </div>
            <div className={f.buttonContainer}>
                <Button onClick={gameEnd} className={f.winButton} variant={"contained"}>Забрать выигрыш</Button>
                <Button className={f.startOverButton} variant={"outlined"}>Начать заново</Button>
            </div>
        </div>
    );
};

export default GameField;