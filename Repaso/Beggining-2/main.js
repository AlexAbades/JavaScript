// Variables 
var name_1 ="Alex Abades";
var height = 200;


// Cretate a variable to display with a space in between 
var concatenate = name_1 + ' ' + height
// Define a variable to store the elements displayed by id 
var datos = document.getElementById('data');
datos.innerHTML = concatenate;

// Template string
var otros = document.getElementById('otros');
otros.innerHTML = `
    <h1>Hola soy la caja de datos</h1>
    <h2>Mi nombre es: ${name_1}</h2>
    <h3>Mido: ${height} cm</h3>
`;

// We can put conditionals 
if(height>=190 && height<200){
    datos.innerHTML += '<h1>Eres una perosna muy alta</h1>' // We can add to the above text with the sum
} else if(height>=200){
    datos.innerHTML = '<h1>Ahora borramos todo y solo sale esta linea</h1>'
} else{
    datos.innerHTML += '<h1>Esle entra en juego, la añadimos a la seleccion</h1>'
}

// for 
for(var i=2010; i<=2020; i++){
    datos.innerHTML += '<h2>Estamos en el año: '+ i;
}

// function 
function MuestraMiNombre(name_1, height){
    var extra = document.getElementById('extra');
    extra.innerHTML = `
    <h1>Codigo dentro de una función</h1>
    <h2>Soy la caja de datos</h2>
    <h3>Mi nombre es: ${name_1}</h3>
    <h3>Mi altura es: ${height} cm</h3>
    `;
}

MuestraMiNombre("Ferran Gutierrez", 180);

function MuestraMiNombre2(name_1, height){
    var misDatos = `
    <h1>Codigo dentro de una función para pasarla a imprimr </h1>
    <h2>Soy la caja de datos</h2>
    <h3>Mi nombre es: ${name_1}</h3>
    <h3>Mi altura es: ${height} cm</h3>
    `;
    return misDatos
}

function imprimir(){
    var print = document.getElementById("print");
    print.innerHTML = MuestraMiNombre2("Alex Didoni", 175);
}

imprimir();

// Array 
var nombres = ['Alex', "Ferran", "Didoni"];
alert(nombres[0]);

document.write('<h1>Listado de Nombres:</h1>')
for(var i=0; i<nombres.length; i++){
    document.write("Nombre " + nombres[i] + "Posición " + i + "<br/>" );
}

// Iterate through the iterable 
document.write('<h1>Listado de Nombres2:</h1>');
nombres.forEach((nombre) => {
    document.write(nombre + "<br/>");
});