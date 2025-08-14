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


function agregarElementoInicio(array){
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++');
    console.log('Agrega un producto al inicio del array productos:')
    console.log('el array actual es:', array)
    array.unshift({ id: 8, nombre: "bicicleta", precio: 4500, stock: 6 });
    console.log('Se agrego un nuevo producto, el array actualizado es:', array);

}
agregarElementoInicio(productos);