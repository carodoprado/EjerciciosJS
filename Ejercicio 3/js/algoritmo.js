var numero = parseInt(prompt ("Ingrese el número de la tabla que desea saber: "));
var cont;

console.log("La tabla del "+numero+" es:");

for (cont =1; cont <=10 ; cont++){

    console.log(numero+"x"+cont+"="+cont*numero);
}