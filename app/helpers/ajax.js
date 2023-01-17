export async function ajax(props) {
    let {url, cbSucces} = props
    fetch(url)
    .then(res => console.log(res))
    .then(json => cbSucces(json))
    .catch(error => {
        console.log(error)
    })

};