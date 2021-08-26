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

  productos;

  constructor() {
    this.productos = []
  }

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

/*Inicia main*/

let carrito = new Carrito();
let agregar = document.getElementById("agregar");
agregar.addEventListener("click", agregarAlCarrito);


/*Termina main*/


function agregarAlCarrito() {

  let nombre = pedirNombre();
  let precio = pedirValor();
  let producto = new Producto(nombre, precio);
  carrito.cargaProducto(producto);
  let resultado = carrito.sumaProducto();

  /*Limpieza de campos de texto*/
  document.getElementById("nombre").value = "";
  document.getElementById("valor").value = "";

 
  dibujarTabla(producto);
  mostrarResultado(resultado);
  mostrarCantidad(carrito)


}


function pedirNombre() {
  let inputNombre = document.getElementById("nombre");
  let nombre = inputNombre.value;
  return nombre;
}

function pedirValor() {
  let inputPrecio = document.getElementById("valor");
  let valor = parseInt(inputPrecio.value);
  return valor;
}


function dibujarTabla(producto) {

  let tabla = document.getElementById("tabla");

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