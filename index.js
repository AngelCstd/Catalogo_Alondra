import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App)

window.addEventListener("hashchange", App)

document.addEventListener("click", (e) => {
    if (!e.target.matches(".bi")) return false
    document.querySelector("nav").classList.toggle("visible")
})

document.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();

    document.querySelector("nav").classList.toggle("visible")

    localStorage.setItem("lsSearch", e.target.search.value)
    location.hash = `#/search?search=${e.target.search.value}`
})