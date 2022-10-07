import {combineReducers, Store} from "../framework/application_state";
import {gameStatusReducer, roomReducer} from "./reducers";

export const store = new Store(combineReducers(
    {
        gameStatus: gameStatusReducer,
        room: roomReducer,
    }
))