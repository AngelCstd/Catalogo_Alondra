export function SearchForm() {
    const $form = document.createElement("form"),
    $input = document.createElement("input");

    $form.appendChild($input);
    $form.classList = "search-form"
    $input.type = "search";
    $input.placeholder = "Buscar..."
    $input.name = "search"
    $input.autocomplete = "off"

    if (location.hash.includes("#/search")) {
        $input.value = localStorage.getItem("lsSearch")
    }

    document.addEventListener("submit", (e)=>{
        if(!e.target.matches(".search-form")) return false;
        e.preventDefault();

        localStorage.setItem("lsSearch", e.target.search.value)
        location.hash = `#/search?search=${e.target.search.value}`
    })

    return $form;
}