import { ajax } from "./app/helpers/ajax.js";

document.addEventListener("click", (e) => {
    if (e.target.matches("header .bi")||e.target.matches("nav a") || e.target.matches("nav img")){
        document.querySelector("nav").classList.toggle("visible")
    }
})

document.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();

    window.location.href = "/Catalogo_Alondra/catalogo.html/#/search"

    localStorage.setItem("lsSearch", e.target.search.value)
    location.hash = `#/search?search=${e.target.search.value}`
})

ajax({url:"urlfalsa", cbSucces:(categorias)=>{
categorias.forEach(element => {
    let $img = document.createElement("img");
    $img.src = element.img
    document.querySelector("#carrouselInicio").appendChild($img)});
    document.querySelector("#carrouselInicio").children[0].classList.add("centro")
}})

document.querySelector("#header").style.backgroundColor = "#f8bbd0";

function cambioCarousel(i) {
    let $imgs = document.querySelector("#carrouselInicio").children;

    if($imgs.length == i){ i = 0 }
    $imgs[i].classList.toggle("izquierda")
    $imgs[i].classList.toggle("centro")
    i++
    if($imgs.length == i){ i = 0 }
    $imgs[i].classList.toggle("centro")
    $imgs[i].classList.toggle("derecha")
    i++
    if($imgs.length == i){ i = 0 }
    $imgs[i].classList.toggle("derecha")
    $imgs[i].classList.toggle("izquierda")
    
}