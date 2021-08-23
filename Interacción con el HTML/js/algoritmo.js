class Producto {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
  }

  getPrecio() {
    return this.valor;
  }
}

class Carrito {
  productos = [];

  cargaProducto(producto) {
    this.productos.push(producto);
  }

  sumaProducto() {
    let total = 0;
    for (let i = 0; i < this.productos.length; i++) {
      total = total + this.productos[i].getPrecio();
    }
    return total;
  }
}

let carrito = new Carrito();

do {
  let nombre = pedirNombre();
  let precio = pedirValor();
  let producto = new Producto(nombre, precio);
  carrito.cargaProducto(producto);
} while (confirm("Desea ingresar un nuevo producto? "));

let resultado = carrito.sumaProducto();

dibujarTabla(carrito);
mostrarResultado(resultado);
mostrarCantidad(carrito)

function pedirNombre() {
  let nombre = prompt("Ingrese nombre del producto: ");
  return nombre;
}

function pedirValor() {
  let precio = parseFloat(prompt("Ingrese valor del producto: "));
  return precio;
}


function dibujarTabla(carrito) {

  let tabla = document.getElementById("tabla");

  for (let producto of carrito.productos) {


    //Creación de las filas de la tabla//  

    let tr = document.createElement("tr");
    let tdUno = document.createElement("td");
    let tdDos = document.createElement("td");
    tdUno.innerHTML = producto.nombre;
    tdDos.innerHTML = producto.valor;
    tr.appendChild(tdUno);
    tr.appendChild(tdDos);
    tabla.appendChild(tr);

  }

}

//Muestra resultado de la suma de los productos y modifica el span id resultado//

function mostrarResultado(resultado) {

  let span = document.getElementById("resultado");

  span.innerHTML = resultado;


}

//Muestra la cantidad de productos ingresados y modifica el span id cantidad// 

function mostrarCantidad(carrito) {

  let cantidad = document.getElementById("cantidad");

  cantidad.innerHTML = carrito.productos.length;


}