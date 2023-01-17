export async function ajax(props) {
    let {url, cbSucces} = props
    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json.data)
        cbSucces(json.data)})
    .catch(error => {
        console.log(error)
    })

};