// Este lo tenemos que cambiar para que retorne codigo html y meterlo al inner del main por cada categoria enviada
export function Categories(props) {
    let {name, img} = props
return (`
<a href="#/category/${name}" class="categories">
    <div class="categories">
        <img src="${img}" alt="">
        <div>
            <h3>${name}</h3>
            <p>→</p>
        </div>
    </div>
</a>
`)
}