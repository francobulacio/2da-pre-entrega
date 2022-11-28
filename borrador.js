const productos = [
    {nombre: "zapatillas deportivas adidas", precio: 15,stock: 20, categoria: "zapatillas", id: 1},
    {nombre: "remeras deportiva nike", precio: 20,stock: 20, categoria: "remeras", id: 2},
    {nombre: "pantalones nike", precio: 25,stock: 20, categoria: "pantalones", id: 3},
    {nombre: "medias puma", precio: 30,stock: 20, categoria: "medias", id: 4},
    {nombre: "zapatillas deportivas nike", precio: 15,stock: 20, categoria: "zapatillas", id: 5},
    {nombre: "remeras deportiva adidas", precio: 20,stock: 20, categoria: "remeras", id: 6},
    {nombre: "pantalones adidas", precio: 25,stock: 20, categoria: "pantalones", id: 7},
    {nombre: "medias nike", precio: 30,stock: 20, categoria: "medias", id: 8},
    {nombre: "zapatillas deportivas puma", precio: 15,stock: 20, categoria: "zapatillas", id: 9},
    {nombre: "remeras deportiva puma", precio: 20,stock: 20, categoria: "remeras", id: 10},
    {nombre: "pantalones puma", precio: 25,stock: 20, categoria: "pantalones", id: 11},
    {nombre: "medias adidas", precio: 30,stock: 20, categoria: "medias", id: 12},
]



const categorias = [
    "zapatillas",
    "remeras",
    "pantalones",
    "medias",
]


const productosComprados = [] 


alert("Hola bienvenido a compra-facil.com")

const guardarCompra = (productoSeleccionado, cantidadComprada, totalCompra) =>{
    productosComprados.push ({...productoSeleccionado, totalCompra: totalCompra, cantidadComprada: cantidadComprada})
}

const calcularTotalCompra = () =>{
    let total = 0
    for (let producto of productosComprados){
        total += producto.totalCompra
    } return total
}

const listaDeProductos = (lista) =>{
    let resultado = ""
    for(let producto of lista){
        resultado += producto.id + ")" + producto.nombre + "\n"
    }
    return resultado
}

const actualizarStock = (cantidadComprada, productoSeleccionado) =>{
    productos[productoSeleccionado.id -1].stock -= cantidadComprada
}

const comprar = (precio, cantidad) =>{
    return precio * cantidad
}

const factura = (producto, cantidadComprada ,precioTotal) =>{
    return `Detalle de la compra: \n ${producto.nombre} \n La cantidad comprada es de: ${cantidadComprada} \n El precio total es de: ${precioTotal} `
}

const mostrarProducto = (producto) =>{
    return  `El producto seleccionado es: \n ${producto.nombre} \n Su precio es de $${producto.precio} \n Stock disponible ${producto.stock} \n Su producto es de la categoria: ${producto.categoria}` 
}


let decision = ""

while (decision != "no"){
    let opcion = prompt("Por favor seleccione la categoria deseada" + "\n" + "-" + categorias.join ("\n-"))
if(opcion === "medias" || opcion === "zapatillas" || opcion === "remeras" || opcion === "pantalones"){
    const categoriaFiltrada = (productos.filter( (producto) => producto.categoria == opcion ))
    let idProductoSeleccionado = prompt("Nuestros productos son:" + "\n" + listaDeProductos (categoriaFiltrada) + "Seleccione el producto deseado")
    if(idProductoSeleccionado === "" || isNaN(idProductoSeleccionado)) {
        alert("coloque un dato válido")
    }else{
        const productoSeleccionado = productos.find((producto) => producto.id === parseInt(idProductoSeleccionado))
        let detalleProducto = mostrarProducto(productoSeleccionado)
        let quiereComprar = prompt(detalleProducto + "\n" + "Para comprar escriba COMPRAR").toUpperCase()
        if(quiereComprar === "COMPRAR"){
            let cantidadElegida = prompt(`Cuantas unidades le gustaría comprar? \n Las unidades disponibles son ${productoSeleccionado.stock}`)
            if(cantidadElegida <= productoSeleccionado.stock ){
                let totalCompra = comprar (productoSeleccionado.precio, cantidadElegida)
                alert (factura(productoSeleccionado,cantidadElegida,totalCompra))
                guardarCompra (productoSeleccionado, cantidadElegida, totalCompra)
                actualizarStock (cantidadElegida, productoSeleccionado)
                decision = prompt(`Desea seguir comprando?\n Escriba NO si desea terminar la compra \n sino toque cualquier letra para seguir comprando`).toLowerCase()
            }else {
                alert("No hay suficiente stock para realizar esta operación")
            }
        }
    }
    } else {
    alert("Por favor elija la categoria deseada") 
}
}
alert (`Los productos comprados son \n ${listaDeProductos(productosComprados)}Total: $${calcularTotalCompra ()}`)





