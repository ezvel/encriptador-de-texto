function formatearSalida(){
    alinearResultadoAMostrarArriba();
    alinearResultadoAMostrarALaIzquierda();
    estilizarResultadoAMostrar();
}

function alinearResultadoAMostrarArriba(){
    const contenidoOutput = document.querySelector(".aside__output-container");
    contenidoOutput.classList.add("justify-content-start");
}
function alinearResultadoAMostrarALaIzquierda(){
    const contenidoOutput = document.querySelector(".aside__output-container");
    contenidoOutput.classList.add("align-item-left");
}
function estilizarResultadoAMostrar(){
    $contenido = document.querySelector(".contenido-output p"); 
    $contenido.style.color = "#495057"; 
    $contenido.style.lineHeight = "150%";
    $contenido.style.textAlign = "left";
    $contenido.style.width = "100%";
    $contenido.style.verticalAlign = "top";
    $contenido.style.fontSize = "20px";
}


function mostrarResultado(texto) {
    vaciarParrafoInserteTexto();
    mostrarParrafoResultado(texto);
    vaciarInput();
}

function vaciarParrafoInserteTexto(){
    document.querySelector(".contenido-output p").textContent = "";
}
function mostrarParrafoResultado(texto){
    document.querySelector(".contenido-output p").textContent = texto;
}
function vaciarInput(){
    const input = document.querySelector("textarea");
    input.value = "";
}



function ocultarMuniecoYTextoAntesDelResultado(){
    ocultarEncabezadoNingunMensajeEncontrado();
    ocultarMunieco();
}

function ocultarEncabezadoNingunMensajeEncontrado(){
    const $encabezadoNingunMensajeEncontrado = document.querySelector(".contenido-output h2");
    $encabezadoNingunMensajeEncontrado.classList.remove("mostrar");
    $encabezadoNingunMensajeEncontrado.classList.add("ocultar");
}
function ocultarMunieco(){
    const $munieco = document.querySelector(".img-munieco");
    $munieco.classList.remove("mostrar");
    $munieco.classList.add("ocultar");
}


function mostrarBotonCopiar(){
    $botonCopiar.style.display = "block";
}


function centrarContenido(){
    document.querySelector(".aside__output-container").classList.remove("justify-content-start");
    document.querySelector(".aside__output-container").classList.remove("align-item-left");
}

function borrarResultado(){
    document.querySelector(".contenido-output p").textContent = "";
    $botonCopiar.style.display = "none";
}
function mostrarParrafoInserteTexto(){
    document.querySelector(".contenido-output p").textContent = "Ingresa el texto que desees encriptar o desencriptar";
    document.querySelector(".contenido-output p").style.textAlign = "center";
}
function mostrarMunieco(){
    const $munieco = document.querySelector(".img-munieco");
    $munieco.classList.remove("ocultar");
    $munieco.classList.add("mostrar");
}
function mostrarEncabezadoNingunMensajeEncontrado(){
    const $encabezadoNingunMensajeEncontrado = document.querySelector(".contenido-output h2");
    $encabezadoNingunMensajeEncontrado.classList.remove("ocultar");
    $encabezadoNingunMensajeEncontrado.classList.add("mostrar");
}
function estilizarResultadoInsertarTexto(){
    $contenido = document.querySelector(".contenido-output p"); 
    $contenido.style.color = "#000000"; 
    $contenido.style.lineHeight = "100%";
    $contenido.style.textAlign = "center";
    $contenido.style.width = "100%";
    $contenido.style.fontSize = "16px";
}



/*
TENEMOS EL PROBLEMA EN QUE AL DAR COPIAR EL MUÑECO APARECE CON EL TEXTO "INSERTE...", HASTA ACÁ VA BIEN, PERO SI YO EN ESE MOMENTO
ACHICO EL TAMAÑO DE VENTANA ME SIGUE APARECIENDO EL MUÑECO EN TAMAÑO TABLET. 
PARA ELLO UTILIZAREMOS EL EVENTO RESIZE CON EL MÉTODO INNERWIDTH PARA DETECTAR QUE EN DETERMINADO TAMAÑO DE VENTANA EL MUÑECO
DESAPAREZCA
*/
window.addEventListener("resize", () => {
    const $munieco = document.querySelector(".img-munieco");
    if (window.innerWidth < 1200) {
        $munieco.classList.remove("mostrar");
        $munieco.classList.add("ocultar");
    }
})


/*UNA VEZ QUE APARECE EL RECUADRO ROJO Y EL TEXTO ROJO COMO MENSAJES DE ERROR
QUEREMOS QUE AL MOMENTO DE HACER CLICK EN EL TEXTAREA PARA VOLVER A INTENTARLO LOS
ESTILOS VUELVAN A LA NORMALIDAD*/

document.querySelector('textarea').addEventListener('click', () => {
    const $textarea = document.querySelector('textarea');
    const $mensajeErrorParrafo = document.getElementById('mensaje-de-error');

    $textarea.classList.remove('border-red');
    $mensajeErrorParrafo.textContent = "";
    $mensajeErrorParrafo.classList.remove('red');

})






