export function Details(props) {
    let {name, img, precio, details} = props,
    $div = document.createElement("div"),
    $p = creaPrecios(details);
    $div.classList.add("details")

    $div.innerHTML=`
    <img src="${img}" alt="">
    <div>
        <h2>${name}</h2>
        <h3>$${precio}</h3>
        <div>${$p}</div>
    </div>
    `

    return $div;
}
function creaPrecios(arra) {
    let precios = "";
    arra.forEach(e => precios +=`<p>${e}</p><br>`)
    return precios
}