
var resultado = 0;

do {
    let producto = pedirValor();

    resultado = sumaProducto(producto, resultado);

} while (confirm("Desea ingresar un nuevo producto? "));



alert("La suma total de productos es de: " + resultado);


function pedirValor() {

    let producto = parseInt(prompt("Ingrese valor del producto: "));
    return producto;
}

function sumaProducto(producto, resultado) {


    let total = resultado + producto;
    return total;

}


