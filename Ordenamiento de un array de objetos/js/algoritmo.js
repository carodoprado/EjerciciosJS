class Persona{

    constructor(nombre, edad){

        this.nombre=nombre;
        this.edad=edad;
    }
}


let personas=[];


do{
 
    let nombre = prompt("Ingrese nombre de la persona: ");
    let edad = parseInt(prompt("Ingrese edad: "));
    let persona= new Persona(nombre, edad);
    personas.push(persona);


} while (confirm("¿Desea ingresar una nueva persona?"));


personas.sort(function (pers1, pers2){


    return pers2.edad-pers1.edad;


})

console.log(personas);