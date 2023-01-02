import { Router } from "./app/components/Router.js";


export function App() {
const $root = document.getElementById("root");
$root.innerHTML = null;
Router()
}