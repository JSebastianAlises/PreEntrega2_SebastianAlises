//alert()

const discos = [
    {disco: 1, titulo: "ESQUIVANDO CHARCOS", precio: 10, stock: 2},
    {disco: 2, titulo: "A DONDE ME LLEVA LA VIDA", precio: 20, stock: 2},
    {disco: 3, titulo: "BAILANDO EN UNA PATA", precio: 30, stock: 0},
    {disco: 4, titulo: "DESPEDAZADO POR MIL PARTES", precio: 40, stock: 2},
    {disco: 5, titulo: "LA RENGA", precio: 40, stock: 2},
    {disco: 6, titulo: "LA ESQUINA DEL INFINITO", precio: 50, stock: 2},
    {disco: 7, titulo: "INSOPORTABLEMENTE VIVO", precio: 60, stock: 2},
    {disco: 8, titulo: "DOCUMENTO UNICO", precio: 70, stock: 0},
    {disco: 9, titulo: "DETONADOR DE SUEÑOS", precio: 80, stock: 2},
    {disco: 10, titulo: "TRUENOTIERRA", precio: 90, stock: 2},
    {disco: 11, titulo: "ALGUN RAYO", precio: 100, stock: 2},
    {disco: 12, titulo: "PESADOS VESTIGIOS", precio: 110, stock: 2},
    {disco: 13, titulo: "ALEJADO DE LA RED", precio: 120, stock: 2},
];

// const ahorros = 50 // Esto puede ser un PROMPT para el usuario

console.table(discos);

console.log("----------------------------titulo y precio de cada disco ---------------------------");

// Llamo al titulo y precio de cada disco - Función FOROF

function mostrarPreciosDiscos(discos) {
    for (const disco of discos) { 
        console.log (`El precio del disco ${disco.titulo} es de $ ${disco.precio}`)
    }
};

mostrarPreciosDiscos(discos);

console.log("--------------------------precio de la discografia completa-----------------------------");

// Quiero saber el precio de la discografia completa - Función FOROF

let precioDiscografia = 0;

for (const disco of discos) { 
    precioDiscografia += disco.precio
};

console.log ("El precio de la discografia completa es de $ " + precioDiscografia);

console.log("---------------------------stock de cada disco----------------------------");

// Quisiera saber el stock de cada disco - Función FOROF

for (const disco of discos) { console.log ("Del album " + disco.titulo + " tenemos disponible " + disco.stock + " discos")};

console.log("---------------------------stock de determinado disco----------------------------");

// Quiero saber si tenemos o no tenemos stock de los difentes discos - Función FOROF con if else dentro

for (const disco of discos) {
    if (disco.stock > 0){
        console.log(("Del album " + disco.titulo + " tenemos disponible " + disco.stock + " discos"));
    } else {console.log(("Del album " + disco.titulo + " no tenemos stock"))};
};

console.log("---------------------------Pedir un determinado disco----------------------------");

// Quisiera pedir un determinado disco y ver si se encuentra en stock 

const discoQueQuiero = prompt("Que disco quiere elegir:" + "\n" + 'Esquivando Charcos' + "\n" + 'A Donde Me Lleva La Vida '+ "\n" + 'Bailando En Una Pata' + "\n" + 'Despedazado Por Mil Partes' + "\n" + 'La Renga' + "\n" + 'La Esquina Del Infinito' + "\n" + 'Insoportablemente Vivo' + "\n" + 'Documento Unico' + "\n" + 'Detonador De Sueños' + "\n" + 'Truenotierra' + "\n" + 'Algun Rayo' + "\n" + 'Pesados Vestigios' + "\n" + 'Alejado De La Red').toUpperCase(); //Consulto disco a elegir

const stockDeDisco = discos.find (disco => disco.titulo === discoQueQuiero); // FIND Me dice sin importar si hay o no stock del disco

//console.log(stockDeDisco);

if (stockDeDisco && stockDeDisco.stock > 0){ // IF ELSE con la constante de FIND y el recurso && 
    console.log(stockDeDisco);
    alert (`Tenemos stock disponible del disco ${stockDeDisco.titulo} y te queda en $ ${stockDeDisco.precio}`)
    } else {
        console.log("Del album " + discoQueQuiero + " no tenemos stock");
        alert("No tenemos stock")
};

console.log("---------------------------Ahorros para compra de disco----------------------------");

// FILTER Quiero saber cuales discos entran para poder abonar con una plata ahorrada

const ahorros = Number(prompt("Ingrese sus ahorros")) // Esto puede ser un PROMPT para el usuario

const ahorrosParaDisco = discos.filter (precio => precio.precio < ahorros );

console.log("Tengo ahorrado $ " + ahorros + " por lo que me alcanza para: ");
console.table (ahorrosParaDisco);

console.log("---------------------------Promociones----------------------------"); 

//Deseo generar diferentes promociones con discos especificos, por lo que genero un nuevo array, trayendo el nombre de cada disco con MAP y luego lo llamo con otro nuevo array según la promoción que desee, informando JOIN para generar un string con todos los elementos del array, que serían los titulos deseados.

const titulos = discos.map ((titulo) => titulo.titulo);

console.log(titulos)

const promocion1 = [titulos[1], titulos[5]]

console.log ("Tenemos en promoción los titulos de " + promocion1.join (" y ") + ". Llevando los dos al precio de $50")

console.log("---------------------------Método de pago----------------------------"); 

//Como abonaría y si aceptamos dicho medio de pago. ¿Se puede financiar? ¿Qué intereses tiene?

const metodoDePago = prompt('Elegí el medio de pago:' + "\n" + 'efectivo' + "\n" + 'tarjeta de debito' +"\n" + 'tarjeta de credito')

switch (metodoDePago) {
    case "efectivo":
        console.log("Abono con efectivo");
        alert("Podrás abonar con ese medio")
        break;
    case "tarjeta de debito":
        console.log("Abono con tarjeta de débito");
        alert("Podrás abonar con ese medio")
        break;
    case "tarjeta de credito":
        console.log("Abono con tarjeta de crédito");
        alert("Podrás abonar con ese medio")
        break;        
    default: 
        console.log("No contamos con está opción de pago");
        alert("No contamos con está opción de pago")
}