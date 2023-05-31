/*****************************************VARIABLES DEL DOM**************************************************/
const $botonEncriptar = document.querySelector(".boton-encriptar");
const $botonDesencriptar = document.querySelector(".boton-desencriptar");
const $botonCopiar = document.getElementById("copiar");


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



function encriptarTexto() {
    const $input = document.querySelector("textarea");
    let textoSinEncriptar = $input.value;
    let textoEncriptado = "";

    const a_encriptado = "ai";
    const e_encriptado = "enter";
    const i_encriptado = "imes";
    const o_encriptado = "ober";
    const u_encriptado = "ufat";

    for(let i = 0; i < textoSinEncriptar.length; i++) {
        
    }
  
    textoEncriptado = textoSinEncriptar.replaceAll("i", i_encriptado)
                                       .replaceAll("a", a_encriptado)
                                       .replaceAll("e", e_encriptado)
                                       .replaceAll("o", o_encriptado)
                                       .replaceAll("u", u_encriptado);

    return textoEncriptado;
}
function desencriptarTexto(){
    const $input = document.querySelector("textarea");
    let textoEncriptado = $input.value;
    let textoSinEncriptar;

    const a_encriptado = "ai";
    const e_encriptado = "enter";
    const i_encriptado = "imes";
    const o_encriptado = "ober";
    const u_encriptado = "ufat";

    textoSinEncriptar = textoEncriptado.replaceAll(a_encriptado, "a")
                                       .replaceAll(e_encriptado, "e")
                                       .replaceAll(i_encriptado, "i")
                                       .replaceAll(o_encriptado, "o")
                                       .replaceAll(u_encriptado, "u");

    return textoSinEncriptar;

}
function mostrarBotonCopiar(){
    $botonCopiar.style.display = "block";
}

function encriptar() {
    let textoEncriptado;

    formatearSalida();
    ocultarMuniecoYTextoAntesDelResultado();

    textoEncriptado = encriptarTexto();

    mostrarResultado(textoEncriptado);
    
    mostrarBotonCopiar();
}

function desencriptar() {
    let textoSinEncriptar;

    formatearSalida();
    ocultarMuniecoYTextoAntesDelResultado();                         

    textoSinEncriptar = desencriptarTexto();

    mostrarResultado(textoSinEncriptar);

    mostrarBotonCopiar();
}




//FUNCIÓN COPIAR AL PORTAPAPELES
function copiar(){
    //BORRAMOS EL FORMATEO INICIAL PARA MOSTRAR EL CONTENIDO Y EL MUÑECO SEGÚN EL TAMAÑO DE PANTALLA
    centrarContenido();
    //AGREGA EL MÉTODO PARA COPIAR AL CLIPBOARD
    copiarAlClipboard()
    //ELIMINA EL CONTENIDO AL COPIAR PARA MOSTRAR MÁS ADELANTE EL "INGRESA EL TEXTO..."
    borrarResultado();
    /*
    NECESITAMOS MOSTRAR EL MENSAJE DE INSERTE... EN EL MOMENTO QUE DAMOS COPIAR
    */
    mostrarParrafoInserteTexto();
    /*
    CON ESTA LÓGICA NOS ASEGURAMOS QUE EL MUÑECO SE MUESTRE AL APRETAR COPIAR SOLAMENTE CUÁNDO EL TAMAÑO
    DE PANTALLA SEA EL DE ESCRITORIO. TENÍAMOS EL PROBLEMA QUE AL MOSTRAR EL MUÑECO SIN ESTA CONDICIONAL
    EL MUÑECO SE HACÍA EVIDENTE EN UN TAMAÑO TABLET Y CELULAR, LO CUÁL NO ERA DESEADO.
    */
    if(window.innerWidth >= 1200 ) {
        mostrarMunieco();
    }   
    
    mostrarEncabezadoNingunMensajeEncontrado();
    estilizarResultadoInsertarTexto();

}

function centrarContenido(){
    document.querySelector(".aside__output-container").classList.remove("justify-content-start");
    document.querySelector(".aside__output-container").classList.remove("align-item-left");
}
function copiarAlClipboard(){
    let contenidoACopiar = document.querySelector(".contenido-output p").textContent;
    navigator.clipboard.writeText(contenidoACopiar);
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


//EVENTOS
$botonEncriptar.addEventListener("click", encriptar);
$botonDesencriptar.addEventListener("click", desencriptar);
$botonCopiar.addEventListener("click", copiar);

/*
TENEMOS EL PROBLEMA EN QUE AL DAR COPIAR EL MUÑECO APARECE CON EL TEXTO "INSERTE...", HASTA ACÁ VA BIEN, PERO SI YO EN ESE MOMENTO
ACHICO EL TAMAÑO DE VENTANA ME SIGUE APARECIENDO EL MUÑECO EN TAMAÑO TABLET. 
PARA ELLO UTILIZAREMOS EL EVENTO RESIZE CON EL MÉTODO INNERWIDTH PARA DETECTAR QUE EN DETERMINADO TAMAÑO DE VENTANA EL MUÑECO
DESAPAREZCA
*/
window.addEventListener("resize", () => {
    if (window.innerWidth < 1200) {
        munieco.classList.remove("mostrar");
        munieco.classList.add("ocultar");
    }
})







