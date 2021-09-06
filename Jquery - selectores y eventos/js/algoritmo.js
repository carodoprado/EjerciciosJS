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


let carrito = new Carrito();


$(document).ready(function () {

  /*Recupera productos del storage*/

  let prod = JSON.parse(localStorage.getItem("productos"));

  if (prod != null) {
    carrito.productos = prod;
  }

  mostrarCantidad(carrito);

  for (let producto of productos) {

    dibujarCard(producto);
  }

  $(".botones").click(function (e) {
    carrito.cargaProducto(productos[e.target.dataset.id]); /*Recupera el objeto producto del array según el ID del botón clickeado*/
    localStorage.setItem("productos", JSON.stringify(carrito.productos));
    mostrarCantidad(carrito);
  });

});

//Muestra la cantidad de productos ingresados y modifica el span id cantidad// 

function mostrarCantidad(carrito) {

  let cantidad = document.getElementById("cantidad");
  cantidad.innerHTML = carrito.productos.length;

}

//Creación de los cards de productos//  

function dibujarCard(producto) {



  let divCol = document.createElement("div");
  $(divCol).addClass("col mb-5");
  $("#container").append(divCol);


  let divCard = document.createElement("div");
  $(divCard).addClass("card h-100");
  $(divCol).append(divCard);

  /* Product image*/

  let imgCard = document.createElement("img");
  $(imgCard).addClass("card-img-top")
  $(imgCard).attr("alt", "...");
  $(imgCard).attr("src", producto.imagen);
  $(divCard).append(imgCard);


  /*Product details*/


  let divCardBody = document.createElement("div");
  $(divCardBody).addClass("card-body p-4")
  $(divCard).append(divCardBody)



  let divText = document.createElement("div");
  $(divText).addClass("text-center");
  $(divCardBody).append(divText);


  /*Product name*/

  let h5 = document.createElement("h5");
  $(h5).addClass("fw-bolder");
  $(h5).html(producto.nombre);
  $(divText).append(h5);
  let precioProducto = document.createTextNode("$" + producto.precio);
  $(divText).append(precioProducto);


  /*Product actions*/


  let divCardFooter = document.createElement("div");
  $(divCardFooter).addClass("card-footer p-4 pt-0 border-top-0 bg-transparent")
  $(divCard).append(divCardFooter);
  divCard.appendChild(divCardFooter);


  let divTextCenter = document.createElement("div");
  $(divTextCenter).addClass("text-center");
  $(divCardFooter).append(divTextCenter);


  let tagA = document.createElement("a");
  $(tagA).addClass("btn btn-outline-dark mt-auto botones")

  $(tagA).attr("href", "#");
  $(tagA).attr("data-id", producto.id);
  $(tagA).html("Agregar al carrito");
  $(divTextCenter).append(tagA);


}