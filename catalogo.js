import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App)

window.addEventListener("hashchange", App)

document.addEventListener("click", (e) => {
    if (e.target.matches("header .bi")||e.target.matches("nav a") || e.target.matches("nav img")){
        document.querySelector("nav").classList.toggle("visible")
    }
})

document.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;
    console.log(document)
    e.preventDefault();

    document.querySelector("nav").classList.toggle("visible")

    localStorage.setItem("lsSearch", e.target.search.value)
    location.hash = `#/search?search=${e.target.search.value}`
})