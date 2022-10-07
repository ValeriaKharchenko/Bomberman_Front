import VDom from "../framework/Vdom";
import './assets/styles.css';
import {GameField, generateLevel, template} from "./map";
import ws from "./ws";
import {store} from "./store";

export function App() {
    const state = store.getState();
     const inGame = state.gameStatus.isStarted;
     console.log("Game:", inGame);
    return (
        <section>
            <Header/>
            {
                inGame? <GameField template={generateLevel(template)}/> :
                    <StartScreen/>
            }

            <Footer/>
        </section>
    )
}

function Header() {
    return (
        <header className={"header"}>
            <h1>Bomberman</h1>
        </header>
    )
}

function Footer() {
    return (
        <footer className={"footer"}>
            {/*<span>*/}
            {/*                this is footer*/}
            {/*</span>*/}

        </footer>
    )
}

function StartScreen() {
    const addPlayer = (e) => {
        e.preventDefault();
        const name = e.target.value.trim();
        if (name.length > 0 && e.key === "Enter") {
            // console.log(name);
            ws.start(name);
            e.target.value = "";
        }
    }
    return(
        <div className={"start-screen"}>
            <input type={"input"} placeholder="Enter your name" onKeyUp={(e) => {addPlayer(e)}}/>
        </div>
    )
}