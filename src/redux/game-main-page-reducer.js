const UPDATE_BET_AMOUNT = 'UPDATE-BET-AMOUNT';
const UPDATE_BALANCE_AFTER_BET = 'UPDATE-BALANCE-AFTER-BET';

let initialState = {
    balance: 200,
    betAmount: 0,
    gameStarted: false,
}

const gameMainPageReducer = (state= initialState, action) => {
    switch(action.type) {
        case UPDATE_BALANCE_AFTER_BET:
            return {
                ...state,
                balance: state.balance - state.betAmount,
                betAmount: '',
                gameStarted: true,
            }
        case UPDATE_BET_AMOUNT:
            return {
                ...state,
                betAmount: action.inputBetAmount,
            }
        default:
            return state;
    }
}

export let updateBalanceAfterBetActionCreator = () => {
    return {
        type: 'UPDATE-BALANCE-AFTER-BET',
    }

}

export let betAmountActionCreator = (number) => {
    return {
        type: 'UPDATE-BET-AMOUNT',
        inputBetAmount: number,
    }
}

export default gameMainPageReducer;