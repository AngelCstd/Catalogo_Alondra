// Este lo tenemos que cambiar para que retorne codigo html y meterlo al inner del main por cada categoria enviada
export function Categories(props) {
return (`
<a href="#/category/${props.nombre}" class="categories">
    <div class="categories">
        <img src="${props.img}" alt="">
        <div>
            <h3>${props.nombre}</h3>
            <p>→</p>
        </div>
    </div>
</a>
`)
}