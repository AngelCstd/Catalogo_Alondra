export function Details(props) {
    let {name, img, precio, details} = props,
    $div = document.createElement("div")
    $div.classList.add("details")

    $div.innerHTML=`
    <img src="${img}" alt="">
    <div>
        <h2>${name}</h2>
        <h3>$${precio}</h3>
        <p>${details}</p>
    </div>
    `

    return $div;
}