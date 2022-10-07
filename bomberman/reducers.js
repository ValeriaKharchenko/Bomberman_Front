const gameInitialState = {
    isStarted: false,
};
const roomInitialState = {
    roomID: "",
    name: "",
    map: [],
}
const START_GAME = "START_GAME";

export function gameStatusReducer(state = gameInitialState, action) {
    switch (action.type) {
        case START_GAME:
            return {
                isStarted: true
            };
        default:
            return state;
    }
}

const SET_PLAYER = "SET_PLAYER";

export function roomReducer(state = roomInitialState, action) {
    switch (action.type) {
        case SET_PLAYER:
            return {
                roomID: action.roomID,
                name: action.name
            }
        default:
            return state;
    }
}

//Action creators
export function startGame() {
    return {
        type: START_GAME,
    }
}

export function setPlayer(name, roomID) {
    return {
        type: SET_PLAYER,
        name: name,
        roomID: roomID,
}}