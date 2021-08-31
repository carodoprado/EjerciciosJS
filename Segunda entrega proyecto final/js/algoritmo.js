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

/*Recupera productos del storage*/ 

let prod = JSON.parse(localStorage.getItem("productos"));

if (prod != null) {
  carrito.productos = prod;
}

mostrarCantidad(carrito);

for (let producto of productos) {

  dibujarCard(producto);
}


let botones = document.getElementsByClassName("botones");

for (let boton of botones) {

  boton.addEventListener("click", agregarAlCarrito);

}


/*Termina main*/


function agregarAlCarrito(e) {

  carrito.cargaProducto(productos[e.target.dataset.id]); /*Recupera el objeto producto del array según el ID del botón clickeado*/
  localStorage.setItem("productos", JSON.stringify(carrito.productos));
  mostrarCantidad(carrito);

}


//Muestra la cantidad de productos ingresados y modifica el span id cantidad// 

function mostrarCantidad(carrito) {

  let cantidad = document.getElementById("cantidad");
  cantidad.innerHTML = carrito.productos.length;

}

//Creación de los cards de productos//  

function dibujarCard(producto) {


  let container = document.getElementById("container");
  let divCol = document.createElement("div");
  divCol.classList.add("col");
  divCol.classList.add("mb-5");
  container.appendChild(divCol);


  let divCard = document.createElement("div");
  divCard.classList.add("card");
  divCard.classList.add("h-100");
  divCol.appendChild(divCard);

  /* Product image*/

  let imgCard = document.createElement("img");
  imgCard.classList.add("card-img-top");
  imgCard.setAttribute("alt", "...");
  imgCard.setAttribute("src", producto.imagen);
  divCard.appendChild(imgCard);


  /*Product details*/

  let divCardBody = document.createElement("div");
  divCardBody.classList.add("card-body");
  divCardBody.classList.add("p-4");
  divCard.appendChild(divCardBody);


  let divText = document.createElement("div");
  divText.classList.add("text-center");
  divCardBody.appendChild(divText);



  /*Product name*/


  let h5 = document.createElement("h5");
  h5.classList.add("fw-bolder");
  h5.innerHTML = producto.nombre;
  divText.appendChild(h5);
  let precioProducto = document.createTextNode("$" + producto.precio);
  divText.appendChild(precioProducto);


  /*Product actions*/


  let divCardFooter = document.createElement("div");
  divCardFooter.classList.add("card-footer");
  divCardFooter.classList.add("p-4");
  divCardFooter.classList.add("pt-0");
  divCardFooter.classList.add("border-top-0");
  divCardFooter.classList.add("bg-transparent");
  divCard.appendChild(divCardFooter);


  let divTextCenter = document.createElement("div");
  divTextCenter.classList.add("text-center");
  divCardFooter.appendChild(divTextCenter);


  let tagA = document.createElement("a");
  tagA.classList.add("btn");
  tagA.classList.add("btn-outline-dark");
  tagA.classList.add("mt-auto");
  tagA.classList.add("botones");
  tagA.setAttribute("href", "#");
  tagA.setAttribute("data-id", producto.id);
  tagA.innerHTML = "Agregar al carrito";
  divTextCenter.appendChild(tagA);

}