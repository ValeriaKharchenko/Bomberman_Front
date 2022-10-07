import VDom from "../framework/Vdom";
import {App} from "./App";
import {render} from "../framework";
import {store} from "./store";

export function renderView(store) {
    render(
        <App/>,
        document.getElementById('app')
    )
}

store.subscribe(() => {
    // console.log("Rerender");
    renderView(store);
})

renderView(store);