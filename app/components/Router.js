import { Categories } from "./Categories.js";
import { ajax, ajaxSearch, ajaxSearchId } from "../helpers/ajax.js";
import { Products } from "./Products.js";
import { ProductDetails } from "./ProductDetails.js";

/*
Esta funcion pinta las rutas segun lo que tenga la url
*/
export function Router() {
    const d = document,
        w = window,
        $main = d.getElementById("main");

    $main.innerHTML = null

    let { hash } = location;

    if (!hash || hash === "#/") {
        /*muestra las categorias

        -mandamos a llamar a ajax
        -cada producto obtenido de json lo enviamos a Categories
        -guardamos el contenido html en la variable html
        -agregamos html al main para pintar e html
        */
        ajax({
            url: "urlprueba", cbSucces: (categorias) => {
                let html = "";
                categorias.forEach((categoria) => html += Categories(categoria));
                $main.innerHTML = html;
            }
        })
    }
    else if (hash.includes("#/category")) {
        /* muestra los productos de la categoria elegida

        -separa el hash y obtiene el ultimo objeto del arreglo 
        que es la categoria escogida
        -se manda a llamar ajax
            -obtenemos un arreglo de productos de mandar
             a llamar obtenerProductos y le mandamos el 
            arreglo del json y la categoria buscada
            -obtenemos el codigo html y l guardamos en la
            variable html
            -agregamos el codigo guardado en html en el main
        */
        let busqueda = hash.split('/')[hash.split('/').length - 1];

        ajax({
            url: "urlprueba", cbSucces: (categorias) => {
                let html = "",
                    products = categorias.filter(categoria => categoria.name == busqueda)[0].productos;
                products.forEach((producto) => html += Products(producto));
                $main.innerHTML = html;
            }
        })
    }
    else if (hash.includes("#/product")) {
        /* muestra el producto con detalles
        
        -sacamos el id del producto desde el url
        -mandamos llamar a ajax
            -recibimos el producto que se busco en ajaxSearchId
            -mandamos el producto a ProductDetails para retornar
            una section con todos los datos del producto
        */
        let busqueda = hash.split('/')[hash.split('/').length - 1];
        ajax({url:"urlPrueba",cbSucces: (caracteristicas)=>{
            let product = ajaxSearchId(caracteristicas, busqueda);
            $main.appendChild(ProductDetails(product))
        }})
    }
    else if (hash.includes("#/search")) {
        /* muestra los productos encontrados en la variable de localStorage

        -obtiene el elemento guardado en localStorage 
        -revisa si existe algo en esa variable
        -llamamos a la funcion ajax y le mandamos una callback
            -obtiene un arreglo de ajaxSearch y cada uno de los 
            elementos lo convierte en producto y obtiene 
            el codigo html
            -coloca el codigo en el main
        */
        let query = localStorage.getItem("lsSearch"),
            html = "";

        if (!query) return false;

        ajax({
            url: "urlPrueba", cbSucces: (busqueda) => {
                ajaxSearch(busqueda, query).forEach((encontrado) => html += Products(encontrado))
                $main.innerHTML = html;
            }
        })
    }
}