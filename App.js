import { Header } from "./app/components/Header.js";
import { Router } from "./app/components/Router.js";
import { Main } from "./app/components/Main.js";


export function App() {
const $root = document.getElementById("root");

$root.innerHTML = null;
$root.appendChild(Header());
$root.appendChild(Main());

Router()
}