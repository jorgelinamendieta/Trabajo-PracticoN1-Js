
let productos = [
    {   id : 1,
        nombre: "Muñeca barbie",
        precio: 4500,
        stock: 10
    },

    {
        id : 2,
        nombre: "pelota futbool",
        precio: 3500,
        stock: 15
    },

    {
        id : 3,
        nombre: "bebote sonrisa",
        precio: 9000,
        stock: 5
    },

    {
        id : 4,
        nombre: "Monopatin",
        precio: 1000,
        stock: 4
    },

    {
        id : 5,
        nombre: "caballo saltarin",
        precio: 15000,
        stock: 0
    }
]

function mostrarProductos (array){
    console.log('-----------------------------------------------');
    console.log('Mostrar Productos disponibles en el array:')
    for (let producto of array){
        console.log(producto);
    }
};
mostrarProductos(productos);

//2) Operaciones Básicas y Acceso:

//1
function imprimirLongitud(array) {
    console.log('-----------------------------------------------');
    console.log('Imprimir Longitud total del array:')
    console.log(`Actualmente se tiene ${array.length} productos cargados`)
}

 imprimirLongitud(productos)

 //2
function accederPorIndice(array) {
    console.log('-----------------------------------------------');
    console.log('Acceder a elementos por su índice:');
    console.log('El nombre del segundo producto es:', array[1].nombre);
    console.log('El nombre del cuarto producto es:', array[3].nombre);
}
accederPorIndice(productos);




 // 3) Recorrido del Array:

//1
function recorrerArray(array) {
    console.log('-----------------------------------------------');
    console.log('Recorrer el array de productos con for of:')
    for (let producto of array) {
        console.log(`El nombre del producto es: ${producto.nombre} y el precio es: $${producto.precio}`);
    }
}
 recorrerArray(productos)

//2

function recorrerArray1(array) {
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++');
    console.log('Recorrer el array de productos con forEach:')
    productos.forEach(producto => {
    console.log(`El nombre del producto es: ${producto.nombre} y el precio es: $${producto.precio}`);

});
}
 
 recorrerArray1(productos);


    //4) Manipulación de Arrays:
//1
function agregarElementoFinal(array) {
    console.log('-----------------------------------------------');
    console.log('Agregar dos elementos al final del array de productos:')
    console.log('El array original es:', array);
    let productoNuevo1 = { id : 6, nombre: "videojuego", precio: 20000, stock: 10 };
    let productoNuevo2 = { id : 7, nombre: "cama elastica", precio: 20000, stock: 10 };
    array.push(productoNuevo1, productoNuevo2);
    console.log('se agrego los elementos,  el array modificado es ', array)
};

agregarElementoFinal(productos)





//2

function eliminarUltimoElemento(array) {
    console.log('-----------------------------------------------');
    console.log('Eliminar ultimo producto del array productos:')
    console.log('el array actual es:', array)

    array.pop();

    console.log('se elimino el ultimo producto, el array actualizado es:', array)
}
eliminarUltimoElemento(productos);




//3
function agregarElementoInicio(array){
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++');
    console.log('Agrega un producto al inicio del array productos:')
    console.log('el array actual es:', array)
    array.unshift({ id: 8, nombre: "bicicleta", precio: 4500, stock: 6 });
    console.log('Se agrego un nuevo producto, el array actualizado es:', array);

}
agregarElementoInicio(productos);





//4
function eliminarPrimerElemento(array) {
    console.log('-----------------------------------------------');
    console.log('Eliminar el primer producto del array productos:')
    console.log('el array actual es:', array)

    array.shift();

    console.log('Se elimino el primer producto, el array actualizado es:', array)
}
eliminarPrimerElemento(productos);


//5
function filtrarProductosConStock(array) {
    console.log('-----------------------------------------------');
    console.log('Filtrar productos con stock mayor a 0:');
    
    let productosConStock = array.filter(producto => producto.stock > 0);
    
    console.log('Productos con stock disponible:', productosConStock);
    return productosConStock;
}

filtrarProductosConStock(productos);



//6.
function mapearNombresProductos(array) {
    console.log('-----------------------------------------------');
    console.log('Mapear nombres de productos:');
    
    let nombresProductos = array.map(producto => producto.nombre);
    
    console.log('Nombres de todos los productos:', nombresProductos);
    return nombresProductos;
}

mapearNombresProductos(productos);



//7.
function encontrarProductoPorId(array, idBuscado) {
    console.log('-----------------------------------------------');
    console.log(`Encontrar producto con id: ${idBuscado}:`);
    let productoEncontrado = array.find(producto => producto.id === idBuscado);
    
    if (productoEncontrado) {
        console.log('Se encontró el producto:', productoEncontrado);
    } else {
        console.log(`No se encontró ningún producto con el id: ${idBuscado}`);
    }
}
encontrarProductoPorId(productos, 3);


//8
function ordenarProductosPorPrecio(array) {
    console.log('-----------------------------------------------');
    console.log('Ordenar productos por precio en orden decreciente:');
    
    let productosOrdenados = array.sort((a, b) => b.precio - a.precio);
    
    console.log('Productos ordenados por precio (decreciente):', productosOrdenados);
    return productosOrdenados;
}
ordenarProductosPorPrecio(productos);

