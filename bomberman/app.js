import VDom from "../framework/Vdom";
import './assets/styles.css';
import {GameField, generateLevel, template} from "./map";

export function App() {
    return (
        <section>
            <Header/>
            <GameField template={generateLevel(template)}/>
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
            <span>
                            this is footer
            </span>

        </footer>
    )
}