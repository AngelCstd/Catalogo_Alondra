export async function ajax(props) {
    let {url, cbSucces} = props

    // const response =  await import('../assets/Categories.json')
    // cbSucces(response)

    fetch("app/assets/Categories.json")
    .then(res => res.json())
    .then(json => cbSucces(json))
    .catch(error => {
        console.log(error)
    })

};

export function ajaxSearch(arr, search) {
    let searchSucces = [],
    buscar = new RegExp(search, "i")

    arr.forEach(categoria => categoria.productos.forEach(element => buscar.test(element.name)?searchSucces.push(element):false));
    
    return searchSucces;
}

export function ajaxSearchId(arr, search) {
    let searchSucces;
    arr.forEach(categoria => categoria.productos.forEach(element => element.id == search?searchSucces = element:false));
    
    return searchSucces;
}