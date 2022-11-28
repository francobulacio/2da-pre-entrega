
// Estamos creando la estructura del objeto producto
class Producto {
    constructor(nombre, precio, stock, categoria, id, ubicacion, url) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
        this.id = id;
        this.ubicacion = ubicacion;
        this.url = url
    }
}

// Aca estamos creando el array productos
class Productos {
    constructor() {
    this.productos = [];
    }
    agregarProducto = (producto) => {
    this.productos.push(producto);
    };
}

// instanciamos la clase donde figuran todos los datos de los productos
const listaDeProductos = new Productos();

listaDeProductos.agregarProducto(new Producto('zapatillas deportivas adidas', 15000, 20, "zapatillas", 1, "Buenos Aires","https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwad70818c/products/AD_FX3581/AD_FX3581-1.JPG" ));
listaDeProductos.agregarProducto(new Producto('remeras deportiva nike', 1500, 50, "remeras", 2, "Buenos Aires","https://redsport.vteximg.com.br/arquivos/ids/1109778-1000-1000/REMERA-NIKE-MSW-TEE-SWOOSH-50-HBR.jpg?v=637878695476230000" ));
listaDeProductos.agregarProducto(new Producto('pantalones nike', 7000, 25, "pantalones", 3, "Buenos Aires", "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/B/V/BV4546-010_0.jpg" ));
listaDeProductos.agregarProducto(new Producto('medias puma', 1200, 40, "medias", 4, "Buenos Aires", "https://http2.mlstatic.com/D_NQ_NP_686010-MLA50480567243_062022-O.webp" ));
listaDeProductos.agregarProducto(new Producto('zapatillas deportivas nike', 17000, 60, "zapatillas", 5, "Buenos Aires", "http://cdn.shopify.com/s/files/1/0024/0992/2620/products/0e3ef61e-e43c-4462-8312-16fa855cd17c-2178e66d79ddb5f19e16146168327779-640-0_b00cef29-24ed-4c3b-8657-bab39f2e0d51_1200x1200.jpg?v=1625066963"));
listaDeProductos.agregarProducto(new Producto('remeras deportiva adidas', 2000, 100, "remeras", 6, "Buenos Aires", "https://redsport.vteximg.com.br/arquivos/ids/1096855-1000-1000/REMERA-ADIDAS-ESSENTIALS-3-TIRAS.jpg?v=637746540076630000" ));
listaDeProductos.agregarProducto(new Producto('pantalones adidas', 9800, 66, "pantalones", 7, "Buenos Aires", "https://http2.mlstatic.com/D_NQ_NP_723129-MLA51617778937_092022-O.webp" ));
listaDeProductos.agregarProducto(new Producto('medias nike', 1900, 21, "medias", 8, "Buenos Aires", "https://redsport.vteximg.com.br/arquivos/ids/1088278-2000-2000/MEDIAS-NIKE-BASIC-PACKX3-CREW-NINO.jpg?v=637668148672600000" ));
listaDeProductos.agregarProducto(new Producto('zapatillas deportivas puma', 17500, 44, "zapatillas", 9, "Buenos Aires", "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5f6c85df/products/PU_382116-04/PU_382116-04-1.JPG"));
listaDeProductos.agregarProducto(new Producto('remeras deportiva puma', 1990, 24, "remeras", 10, "Buenos Aires", "https://sevensport.vteximg.com.br/arquivos/ids/513794-500-500/67114864_1.jpg?v=637867600896570000" ));
listaDeProductos.agregarProducto(new Producto('pantalones puma', 3900, 39, "pantalones", 11, "Buenos Aires", "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6cdca158/products/PU_585814-01/PU_585814-01-1.JPG" ));
listaDeProductos.agregarProducto(new Producto('medias adidas', 2300, 45, "medias", 12, "Buenos Aires","https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/E/D/ED9360_0_3.jpg" ));
listaDeProductos.agregarProducto(new Producto('remeras deportiva puma', 4600, 70, "remeras", 13, "Buenos Aires", "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw36df29d7/products/AD_HC7167/AD_HC7167-1.JPG" ));



// capturamos el id del html de las card de los productos
const mostrar = document.getElementById("cardList")

// aca renderizamos los productos
const renderizarProductos = (productoARenderizar) =>{
    mostrar.innerHTML = ""
    productoARenderizar.forEach ((producto) =>{ 
        mostrar.innerHTML +=
        `        
        <div class="contenedor" id="cajaPrincipal">
            <img src=${producto.url} alt="${producto.nombre}">
            <div class="info">
                <p class="precio"> $ ${producto.precio} </p>
                <p> ${producto.nombre} </p>
                <button class="btn" id="botonCard"> Comprar </button>
                <p>${producto.ubicacion}</p>
            </div>
        </div>`})
} 


renderizarProductos (listaDeProductos.productos)

// capturamos el id del formulario 
const searchForm = document.getElementById("searchForm")

// re-renderizamos cada vez que el usuario ingresa una texto en el campo "input"
handleInput = () =>{
    renderizarProductos(listaDeProductos.productos.filter((producto) => {
        return producto.nombre.toUpperCase().includes (searchForm.search.value.toUpperCase())
    }))
}

// invocamos la función con el evento input
searchForm.search.addEventListener ("input", () =>{
    handleInput ()
})

// re-renderizamos cada vez que el usuario selecciona una nueva categoria dentro del select
handleSelect = () =>{
    renderizarProductos(listaDeProductos.productos.filter ((producto) => {
        return producto.categoria === searchForm.category.value
}
))
}

// invocamos la función con el evento change
searchForm.category.addEventListener ("change", () =>{
    handleSelect ()
})






