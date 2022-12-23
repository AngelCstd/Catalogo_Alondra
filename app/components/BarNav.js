import { SearchForm } from "./SearchForm.js";
export function BarNav() {
    const $menu = document.createElement("nav");
    $menu.innerHTML = `
    <a href="#/">
      <img src="./app/assets/completologo.png" alt="logo">
    </a>`;
    $menu.appendChild(SearchForm())
    return $menu;
}