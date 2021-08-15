
var resultado = 0;


class Producto {
      
    constructor(nombre, valor){
        this.nombre=nombre;
        this.valor=valor;

    }

    getPrecio(){
        return this.valor;
    }
} 

do {

    let nombre = pedirNombre();
    let precio  = pedirValor();
    
    let producto=new Producto(nombre, precio);

    resultado = sumaProducto(producto, resultado);

} while (confirm("Desea ingresar un nuevo producto? "));



alert("La suma total de productos es de: " + resultado);

function pedirNombre() {

    let nombre = prompt("Ingrese nombre del producto: ");
    return nombre;
}

function pedirValor() {

    let producto = parseFloat(prompt("Ingrese valor del producto: "));
    return producto;
}


function sumaProducto(producto, resultado) {

    
    let total = resultado + producto.getPrecio();
    return total;

}


