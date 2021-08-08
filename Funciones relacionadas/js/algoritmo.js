function pedirDato() {
  let costo = parseInt(prompt("Ingrese precio de costo del producto: "));

  return costo;
}

function sumarIva(costo) {
  const iva = 0.21;

  return costo + costo * iva;
}

function mostrarResultado(resultado) {
  alert("El costo final del producto es de " + resultado);
}




mostrarResultado(sumarIva(pedirDato()));