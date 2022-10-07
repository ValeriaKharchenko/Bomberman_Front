let ws;
const SET_PLAYER = "setPlayer";
const SET_BOMB = "setBomb";
const SET_POWER = "setPower";
const DECREASE_HEALTH = "decreaseHealth";
const SET_POSITION = "setPosition";

const powerUp = {
    flameIncrease: "flameIncrease",
    bombIncrease: "bombIncrease",
    speedUp: "speedUp",
}

export default {
    start(playerName) {
        ws = new WebSocket("ws://localhost:8008");
        ws.onopen = () => {
            let jsonData = {};
            jsonData["method"] = SET_PLAYER;
            jsonData["args"] = {"name": playerName}
            ws.send(JSON.stringify(jsonData));
        };
        ws.onmessage = (msg) => {
            const msgJSON = JSON.parse(msg.data);
            if (msgJSON.type ==="roomID") {
                console.log(msgJSON.roomId);
            } else {
                console.log(msgJSON);
            }
            // const roomId = Object.keys(msgJSON)[0];
            // const innerObj = msgJSON[roomId];
            // console.log(msgJSON);
        }
    }
}