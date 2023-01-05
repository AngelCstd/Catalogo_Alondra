export function Products(props) {
    let  $p = creaPrecios(props.details);
    return(`
    <a href="#/product/${props.id}" class="productos">
        <div class="productos">
            <img src="${props.img}" alt="">
            <div>
                <h4 class="name">${props.name}</h3>
                <h4 class="precio">$${props.precio}</h4>
                <div class="details">${$p}</div>
            </div>
        </div>
    </a>
    `)
}
function creaPrecios(arra) {
    let precios = "";
    arra.forEach(e => precios +=`<p>${e}</p><br>`)
    return precios
}