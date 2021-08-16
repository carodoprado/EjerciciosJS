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

alert("La suma total de productos es de: " + resultado);

function pedirNombre() {
  let nombre = prompt("Ingrese nombre del producto: ");
  return nombre;
}

function pedirValor() {
  let precio = parseFloat(prompt("Ingrese valor del producto: "));
  return precio;
}
