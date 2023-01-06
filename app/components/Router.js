import { Categories } from "./Categories.js";
import { ajax, ajaxSearch, ajaxSearchId } from "../helpers/ajax.js";
import { Products } from "./Products.js";
import { Details } from "./Details.js";
import { Carousel } from "./Carousel.js";
import { Contacto } from "./Contacto.js";

export function Router() {
    const d = document,
        w = window,
        $main = d.getElementById("root"),
        $title = d.createElement("h2");

    $main.innerHTML = null
    $title.innerHTML = null
    document.querySelector("#header").style.backgroundColor = "#f8bbd0";
    $main.appendChild($title)

    let { hash } = location;

    if (!hash || hash === "#/catalogo") {
        $title.innerHTML = "Catalogo"
        ajax({
            url: "urlprueba", cbSucces: (categorias) => {
                let html = "";
                categorias.forEach((categoria) => html += Categories(categoria));
                $main.innerHTML += html;
            }
        })
    }
    else if (hash.includes("#/category")) {

        
        let hashNoFiltrado = hash.split('/')[hash.split('/').length - 1],
        busqueda = hashNoFiltrado.split('%20').join(' ')
        $title.innerHTML = busqueda

        ajax({
            url: "urlprueba", cbSucces: (categorias) => {
                let html = "",
                    products = categorias.filter(categoria => categoria.name == busqueda)[0].productos;
                products.forEach((producto) => html += Products(producto));
                $main.innerHTML += html;
            }
        })
    }
    else if (hash.includes("#/product")) {
        let busqueda = hash.split('/')[hash.split('/').length - 1];
        d.querySelector("#header").style.backgroundColor = "";
        $main.innerHTML = null

        ajax({url:"urlPrueba",cbSucces: (categoria)=>{
            let product = ajaxSearchId(categoria, busqueda),
            $section = d.createElement("section");

            $section.classList.add("details")
            $section.classList.add("container")
            $section.appendChild(Details(product))
            $section.appendChild(Carousel(ajaxSearch(categoria, product.name.substring(2,5)).slice(0,5)))

            $main.appendChild($section)
        }})
    }
    else if (hash.includes("#/search")) {
        
        let query = localStorage.getItem("lsSearch"),
            html = "";
            $title.innerHTML = `Resultados de la busqueda ${query}`
        if (!query) return false;

        ajax({
            url: "urlPrueba", cbSucces: (busqueda) => {
                ajaxSearch(busqueda, query).forEach((encontrado) => html += Products(encontrado))
                $main.innerHTML += html;
            }
        })
    }
    else if (hash.includes("#/contacto")){
        $main.innerHTML = Contacto();

    }
}