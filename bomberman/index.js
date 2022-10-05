import VDom from "../framework/Vdom";
import {App} from "./App";
import {render} from "../framework";

export function renderView() {
    // const state = store.getState()
    render(
        <App/>,
        document.getElementById('app')
    )
}

// store.subscribe(() => {
//     renderView(store)
// })

renderView();
// renderView(store)