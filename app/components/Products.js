export function Products(props) {
    return(`
    <a href="#/product/${props.id}" class="productos">
        <div class="productos">
            <img src="${props.img}" alt="">
            <div>
                <h4 class="name">${props.name}</h3>
                <h4 class="precio">$${props.precio}</h4>
                <p class="details">${props.details}</p>
            </div>
        </div>
    </a>
    `)
}