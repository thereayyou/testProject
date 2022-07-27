let initialState = {
    gameField: [
        {level: 3, valueField: [{visible: false, value: 0, id: 15}, {visible: false, value: 1, id: 16}, {visible: false, value: 0, id: 17}, {visible: false, value: 0, id: 18}, {visible: false, value: 0, id: 19}]},
        {level: 2, valueField: [{visible: false, value: 0, id: 10}, {visible: false, value: 0, id: 11}, {visible: false, value: 1, id: 12}, {visible: false, value: 0, id: 13}, {visible: false, value: 0, id: 14}]},
        {level: 1, valueField: [{visible: false, value: 0, id: 5}, {visible: false, value: 0, id: 6}, {visible: false, value: 0, id: 7}, {visible: false, value: 1, id: 8}, {visible: false, value: 0, id: 9}]},
        {level: 0, valueField: [{visible: false, value: 1, id: 0}, {visible: false, value: 0, id: 1}, {visible: false, value: 0, id: 2}, {visible: false, value: 0, id: 3,}, {visible: false, value: 0, id: 4}]},
    ],
    activeLevel: 0
}

const gameFieldReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_LEVEL':
            return {
                ...state,
                activeLevel: state.activeLevel + 1,
            }
        case 'SET_VISIBLE_ELEMENT':
            return {
                ...state,
                gameField: state.gameField.map((el) => {
                    const value = el.valueField.some(val => val.id === action.payload.id)
                    if(value) {
                        return {
                            ...el,
                            valueField: el.valueField.map(field => {
                                if(field.id === action.payload.id) {
                                    return {
                                        ...field,
                                        visible: true,
                                    }
                                }
                                return {
                                    ...field
                                }
                            })
                        }
                    }
                    return {
                        ...el
                    }
                })
            }
        case 'GAME_END':
            return {
                ...initialState,
            }
        default:
            return state;
    }

}

export default gameFieldReducer;