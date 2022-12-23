import { BarNav } from "./BarNav.js";

export function Header() {
let $header = document.createElement('header'),
$checkbox = document.createElement("input");
$checkbox.type = "checkbox"
$checkbox.style.display = ""
$header.id = "header"
$header.innerHTML = `<div class=""hamburger">
<span class="hamburger hamburger1"></span>
<span class="hamburger hamburger2"></span>
<span class="hamburger hamburger3"></span>
</div>`
document.addEventListener("click", (e)=>{
if(!e.target.matches("div.hamburger"))return false
$checkbox.click()
})
$header.appendChild($checkbox)
$header.appendChild(BarNav())
return $header;
}