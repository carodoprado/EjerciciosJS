class Carrito {

  productos;

  constructor() {
    this.productos = []
  }

  cargaProducto(producto, cantidad) {
    let encontrado = [];
    encontrado = carrito.productos.find(function (currentValue, index) {

      return currentValue.id == producto.id
    });
    if (encontrado !== undefined) {
      let indice = carrito.productos.findIndex(function (currentValue, index) {

        return currentValue.id == producto.id
      });

      this.productos[indice].cantidad = parseInt(this.productos[indice].cantidad) + parseInt(cantidad);



    }
    else {
      producto.cantidad = parseInt(cantidad);
      this.productos.push(producto);
    }


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
let productos;

/* Lee los productos de la API*/

$(document).ready(function () {

  const URLGET = "https://613965361fcce10017e78ae9.mockapi.io/productos"

  $.get(URLGET, function (respuesta, estado) {

    if (estado === "success") {

      productos = respuesta;
      for (let producto of productos) {

        dibujarCard(producto);

      }

      $("#confirm").click(function (e) {

        e.preventDefault();
        let cantidad = $("#quantityInput").val();
        carrito.cargaProducto(productos[e.target.dataset.id], cantidad); /* Recupera el objeto producto del array según el ID del botón clickeado*/
        localStorage.setItem("productos", JSON.stringify(carrito.productos));
        mostrarCantidad(carrito);
        dibujarCarrito();

      });

    }


    $(".botones").click(function (e) {

      var id = e.target.dataset.id;

      $("#confirm").attr("data-id", id);

      /* Creación del modal */

      let producto = productos[id];
      $("#img-modal").attr("src", producto.imagen);
      $("#title-modal").html(producto.nombre);
      $("#subtitle-modal").html("$" + producto.precio);
      $("#addCartModal").hide();
      $("#quantityInput").val(1);

    });

    $("#vaciar").click(function (e) {
      e.preventDefault();
      carrito.productos = [];
      localStorage.setItem("productos", JSON.stringify(carrito.productos));
      mostrarCantidad(carrito);
      dibujarCarrito();
    });
  });


  /*Recupera productos del storage*/

  let prod = JSON.parse(localStorage.getItem("productos"));

  if (prod != null) {
    carrito.productos = prod;
  }

  mostrarCantidad(carrito);
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 5) {
      $('.navbar').addClass('navbar-light bg-light');
      $(".navbar").removeClass("transparent");
    } else {
      $('.navbar').removeClass('navbar-light bg-light');
      $(".navbar").addClass("transparent");
    }
  });
});

//Muestra la cantidad de productos ingresados y modifica el span id cantidad// 

function mostrarCantidad(carrito) {

  let total = 0;

  for (producto of carrito.productos) {

    total = total + producto.cantidad;

  }

  $("#cantidad").html(total);


}

//Creación de los cards de productos//  

function dibujarCard(producto) {

  let delay = ("delay-" + producto.id);
  let divCol = document.createElement("div");
  $(divCol).addClass("col mb-5 animate__animated animate__fadeInUp " + delay);
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
  $(tagA).attr("data-bs-target", "#addCartModal")
  $(tagA).attr("data-bs-toggle", "modal")
  $(tagA).html("<i class=\"fas fa-shopping-cart\"></i> Agregar ");
  $(divTextCenter).append(tagA);


}

$("#btn-carrito").click(function () {

  dibujarCarrito();

  $("#dropdown").fadeToggle();
})

function dibujarCarrito() {


  if (carrito.productos.length == 0) {
    $(".buttons").hide();
    $("#productos").html("<p class='dropdown-header'>No tienes productos en tu carrito</p>");


  }
  else {

    $(".buttons").show();
    $("#productos").html("");
  }

  for (let producto of carrito.productos) {

    dibujarProductoCarrito(producto);
  }
}

//Creación del listado de productos en el carrito//   

function dibujarProductoCarrito(producto) {


  let dropdown = document.getElementById("productos");
  let a = document.createElement("a");
  $(a).addClass("dropdown-item d-flex align-items-center");
  $(dropdown).append(a);

  let divUno = document.createElement("div");
  $(divUno).addClass("mr-3");
  $(a).append(divUno);

  let divDos = document.createElement("div");
  $(divDos).addClass("icon-circle bg-primary");
  $(divUno).append(divDos);

  let imagen = document.createElement("img");
  $(imagen).addClass("product-image");
  $(imagen).attr("src", producto.imagen);
  $(divDos).append(imagen);

  let spanBadge = document.createElement("span")
  $(spanBadge).addClass("badge bg-oscuro text-white ms-1 rounded-pill badgeAbs");
  $(spanBadge).html(producto.cantidad);
  $(divDos).append(spanBadge);

  let divTres = document.createElement("div");
  $(divTres).addClass("product-text");
  $(a).append(divTres);

  let divCuatro = document.createElement("div");
  $(divCuatro).addClass("small text-gray-500");
  $(divCuatro).html(producto.nombre);
  $(divTres).append(divCuatro);

  let span = document.createElement("span");
  $(span).addClass("font-weight-bold");

  let precio = producto.precio * producto.cantidad;
  $(span).html("$" + precio);
  $(divTres).append(span);


  let divCinco = document.createElement("div");
  $(divCinco).addClass("trash-icon");
  $(divCinco).attr("data-id", producto.id);
  $(a).append(divCinco);

  let i = document.createElement("i");
  $(i).addClass("far fa-trash-alt");
  $(divCinco).append(i);

  /*Elimina un producto del carrito*/

  $(".trash-icon").click(function (e) {

    let id = $(e.currentTarget).attr("data-id");
    let posicionArray = carrito.productos.findIndex(function (current) {
      return current.id == id;

    })

    let productos = carrito.productos.filter((value, index) => {
      if (carrito.productos[posicionArray] != undefined)
        return value.id != carrito.productos[posicionArray].id;
      return true;
    })
    carrito.productos = productos;
    dibujarCarrito();
    mostrarCantidad(carrito);
    localStorage.setItem("productos", JSON.stringify(carrito.productos));
  });
  calculoTotal(carrito);

}

/* Acción de los botones de selección de cantidades de productos */

$("#button-add").click(function () {

  let value = $("#quantityInput").val();

  $("#quantityInput").val(parseInt(value) + 1);

  let id = $("#confirm").attr("data-id");
  let producto = productos[id];
  let precio = producto.precio;



  $("#subtitle-modal").html("$" + parseInt(precio) * (parseInt(value) + 1));

});

$("#button-substract").click(function () {

  let value = $("#quantityInput").val();

  if (value == 1)
    return false;

  $("#quantityInput").val(parseInt(value) - 1);

  let id = $("#confirm").attr("data-id");
  let producto = productos[id]
  let precio = producto.precio;


  $("#subtitle-modal").html("$" + parseInt(precio) * (parseInt(value) - 1));

});

/*Cálculo del total de productos*/

function calculoTotal(carrito) {

  let total = 0;

  for (producto of carrito.productos) {

    total = total + producto.precio * producto.cantidad;

  }
  $("#total").html("$" + total);

}

/*Alerta de confirmación de compra*/

$("#comprar").click(function () {


  Swal.fire({
    icon: 'success',
    title: 'Pedido realizado con éxito',
    text: 'Muchas gracias por tu compra!',

  })

  $("#btn-carrito").click();
  carrito.productos = [];
  dibujarCarrito();
  mostrarCantidad(carrito);
  localStorage.removeItem("productos");
});