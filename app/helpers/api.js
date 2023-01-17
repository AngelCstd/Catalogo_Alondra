const HTTP = "https://",
DOMAIN = "catalogoalondra.azurewebsites.net",
MARCAS = `${HTTP}${DOMAIN}/marcas?page=`,
CATEGORIAS = `${HTTP}${DOMAIN}/categorias?page=`,
PRODUCTOSTEXTO = `${HTTP}${DOMAIN}/productos?key=texto&page=`,
PRODUCTOSID = `${HTTP}${DOMAIN}/productos?key=id&page=1&id=`,
PRODUCTOSCATEGORIAS = `${HTTP}${DOMAIN}/productos?key=idCategorias&page=`,
PRODUCTOSARRAY = `${HTTP}${DOMAIN}/productos?key=array&page=`

export const api = {HTTP, DOMAIN, MARCAS, CATEGORIAS, PRODUCTOSARRAY, PRODUCTOSCATEGORIAS, PRODUCTOSID, PRODUCTOSTEXTO}