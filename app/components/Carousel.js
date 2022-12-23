import { Products } from "./Products.js";
export function Carousel(props) {
    let $div = document.createElement("div"),
    html = "<h4>La gente tambien vio</h4>";
    $div.classList.add("carousel")

    props.forEach(producto => html += Products(producto));
    $div.innerHTML = html;
    return $div;
}