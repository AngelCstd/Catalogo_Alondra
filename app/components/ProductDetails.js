import { Details } from "./Details.js";
import { Carousel } from "./Carousel.js";
import { ajax, ajaxSearch } from "../helpers/ajax.js";

export function ProductDetails(props) {
    let $section = document.createElement("section");
    $section.classList.add("details")

    ajax({
        url: "urlPrueba", cbSucces: (caracteristicas) => {
            $section.appendChild(Details(props))
            $section.appendChild(Carousel(ajaxSearch(caracteristicas, props.name.substring(2,5)).slice(0,5)))          
        }
    })
    return $section;
}