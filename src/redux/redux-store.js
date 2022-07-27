import {combineReducers, legacy_createStore as createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import gameFieldReducer from "./game-field-reducer";
import gameMainPageReducer from "./game-main-page-reducer";

let reducers = combineReducers({
    gameData: gameFieldReducer,
    gameMainPage: gameMainPageReducer,
})

let store = createStore(reducers, composeWithDevTools())

export default store;