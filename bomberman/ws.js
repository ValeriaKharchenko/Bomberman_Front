import {store} from "./store";
import {setPlayer, startGame} from "./reducers";

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

const dispatch = store.dispatch.bind(store);

const socket = new WebSocket("ws://localhost:8008");
const scaffold = (structure) => {
    const api = {};
    const services = Object.keys(structure);
    for (const serviceName of services) {
        api[serviceName] = {};
        const service = structure[serviceName];
        const methods = Object.keys(service);
        for (const methodName of methods) {
            api[serviceName][methodName] = (...args) => new Promise((resolve) => {
                const packet = { name: serviceName, method: methodName, args };
                socket.send(JSON.stringify(packet));
                socket.onmessage = (event) => {
                    console.log("message received");
                    const data = JSON.parse(event.data);
                    resolve(data);
                };
            });
        }
    }
    return api;
};

 export const api = scaffold({
    game: {
       setPlayer: ["name"],
    }
});

socket.onopen = async () => {
    // const msg = await api.game.setPlayer(playerName);
    console.log("OPEN");
};

export default {
    async start(playerName) {

        const msg = await api.game.setPlayer(playerName);
        console.log("MSG", msg);

        // ws.onmessage = (msg) => {
        //     const msgJSON = JSON.parse(msg.data);
        //     if (msgJSON.type === "roomID") {
        //         console.log(msgJSON);
        //         dispatch(setPlayer(msgJSON.name, msgJSON.roomId));
        //         dispatch(startGame());
        //     } else {
        //         console.log(msgJSON);
        //     }
            // const roomId = Object.keys(msgJSON)[0];
            // const innerObj = msgJSON[roomId];
            // console.log(msgJSON);
        }

}