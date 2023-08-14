// Aplicación de DOM, JSON y storage

let carritoDeComprasLista = []; // Carrito que quiero llenar con los diferentes discos que vaya a comprar

// Selecciono con # los diferentes ID individuales que fui generando en el HTML
const discos = document.querySelector ("#discos"); // Llamo al contenedor padre de todos los discos
// console.log (discos);
const discosElegidos = document.querySelector (".discos-elegidos tbody") // Donde saldrá la información del array de carritoDeComprasLista

// Asignar evento al link de comprar que figura en los discos del HTML

discos.addEventListener("click", comprarDisco)

// Función que reaccionará ante el click en comprar

function comprarDisco(evt){
    evt.preventDefault(); // Evito el comportamiento predeterminado del link en el navegador.
    if(evt.target.classList.contains("comprar-disco")){ // Contains me sirve para aplacar las otras zonas del cuerpo DISCO donde haga click y unicamente funcione en la clase seleccionada, en esté caso, en comprar disco. Target informa que traiga todo lo de esa clase  
        const album = evt.target.parentElement.parentElement.parentElement; // parentElement me permite acceder al elemento padre (o contenedor) de otro elemento en el DOM. Por lo que accedemos a todo el DIV con la imagen y datos colocando 3 veces el mismo, debido a que tiene 3 padres
        // console.log(producto)
        albumElegido (album); // Ahora con está función, voy a indicar lo que traigo para la función comprar disco
    }
}

// Información que cargo en comprar disco

function albumElegido (cd) {
    const datosDelAlbum = {
        album: cd.querySelector ("img").src,
        titulo: cd.querySelector (".titulo-album").textContent,
        precio: cd.querySelector (".precio-disco").textContent,
        cantidad: 1
    }
    // console.log(datosDelAlbum)

    // Pongo una condición, donde verifico el ID del albúm, corroborando que lo elegido no se encuentre y en caso de encontrarse, cambiar la cantidad del producto sin agregar un nueva fila al carrito

    carritoDeComprasLista.push(datosDelAlbum) // Cargo los datos del album elegido al array del Carrito de Compras
    //console.log (carritoDeComprasLista)
    presentacionCarrito () // Escribo en el HTML cada album que voy eligiendo
}


// Como traigo al HTML de forma visual los datos que deseo, esta formula la voy a aplicar siempre que quiera escribir sobre el HTML

function presentacionCarrito () {
    borrarCarrito() // Reinicio todo el carrito de compras para la nueva asignación, así no repito elementos

    carritoDeComprasLista.forEach(producto => {
        const seleccionDiscos = document.createElement ("tr")
        seleccionDiscos.innerHTML =`
        <td><img src="${producto.album}"/></td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        `
        discosElegidos.appendChild (seleccionDiscos)        
    });

    //Al elegir un nuevo disco, me trae también la plantilla anterior, repitiendo de manera indefinida los discos elegidos. ¿Cómo elimino la plantilla anterior? Debería también poder guardar la información, para poder luego traerla nuevamente limpia

    sincronizarStorage() 
};

// Guardo en el local storage la información con la que ire trabajando. Luego podré traer la misma de vuelta con la palabra clave "Carrito"
function sincronizarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carritoDeComprasLista)) // En carrito ire guardando la información del array carritoDeComprasLista
}

// Borro la lista del carrito predefinida, me va a servir para la función en donde quiero agregar nuevos discos, para que no se vuelva a repetir la lista con lo anterior ya seleccionado

function borrarCarrito() {
    while(discosElegidos.firstChild){
        discosElegidos.removeChild(discosElegidos.firstChild)
    }
}

// Como traer una lista de los discos seleccionados para la compra y que se encuentran guardados en el localstorage. Me sirve en el caso de que se me haya ido la página y quiera volver a la elección sin perder la información previamene elegida

document.addEventListener("DOMContentLoaded", ()=> {
    if(JSON.parse (localStorage.getItem("carrito"))){ // Informo que en el caso de que hayan valores guardados en el local storage con la palabra clave CARRITO, me traiga los mismos dentro del array del carrito de compras
        carritoDeComprasLista = JSON.parse (localStorage.getItem("carrito"));
    } else {
        carritoDeComprasLista =[] // En caso de no haber valores, me trae el array como al inicio
    }
    presentacionCarrito() // Vuelvo a escribir sobre el HTML todo lo que ya tenia guardado
})

// Deseo vaciar el carrito de compras, por lo que agrego el boton en el HTML

const borrarDiscos = document.querySelector ("#borrar-discos");

borrarDiscos.addEventListener ("click", borrarDiscosBtn)

function borrarDiscosBtn (evt) {
    evt.preventDefault();
    localStorage.removeItem("carrito");
    carritoDeComprasLista = [];
    sincronizarStorage();
    presentacionCarrito()
}
