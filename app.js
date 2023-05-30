const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const input = document.querySelector("textarea");
const output = document.querySelector(".contenido-output h2");
const munieco = document.querySelector(".img-munieco");
const contenidoOutput = document.querySelector(".aside__output-container");
const botonCopiar = document.getElementById("copiar");

let textoEncriptado;
let textoSinEncriptar;

//FUNCIONES NECESARIAS DE RUTINA PARA LAS FUNCIONES PRINCIPALES ENCRIPTR Y DESENCRIPTAR
function formatearSalida(){
    //EL ELEMENTO SE ALINEA DE UNA FORMA CUÁNDO DICE INGRESE.... QUE CUÁNDO SE MUESTRA EL RESULTADO
    document.querySelector(".aside__output-container").classList.add("justify-content-start");
    document.querySelector(".aside__output-container").classList.add("align-item-left");
    $contenido = document.querySelector(".contenido-output p"); 
    $contenido.style.color = "#495057"; 
    $contenido.style.lineHeight = "150%";
    $contenido.style.textAlign = "left";
    $contenido.style.width = "100%";
    $contenido.style.verticalAlign = "top";
    $contenido.style.fontSize = "20px";
}

function mostrarResultado(texto) {
    document.querySelector(".contenido-output p").textContent = "";
    document.querySelector(".contenido-output p").textContent = texto;
    input.value = "";
}

function ocultarMuniecoYTextoAntesDelResultado(){
    output.classList.remove("mostrar");
    output.classList.add("ocultar");
    munieco.classList.remove("mostrar");
    munieco.classList.add("ocultar");
}

//FUNCIÓN ENCRIPTAR Y DESENCRIPTAR
function encriptar() {
    formatearSalida();
    ocultarMuniecoYTextoAntesDelResultado();

    //VARIABLES DE ENCRIPTACIÓN
    const a_encriptado = "ai";
    const e_encriptado = "enter";
    const i_encriptado = "imes";
    const o_encriptado = "ober";
    const u_encriptado = "ufat";

    //TOMAR VALOR DEL TEXTAREA
    textoSinEncriptar = input.value;

    //ENCRIPTAR
    textoEncriptado = textoSinEncriptar.replace("a",a_encriptado)
                                           .replace("e", e_encriptado) 
                                           .replace("i", i_encriptado)
                                           .replace("o", o_encriptado)
                                           .replace("u", u_encriptado); 

                                          
    mostrarResultado(textoEncriptado);
    
    botonCopiar.style.display = "block";
}

function desencriptar() {
    formatearSalida();
    ocultarMuniecoYTextoAntesDelResultado();

    //VARIABLES DE ENCRIPTACIÓN
    const a_encriptado = "ai";
    const e_encriptado = "enter";
    const i_encriptado = "imes";
    const o_encriptado = "ober";
    const u_encriptado = "ufat";

    //TOMAR VALOR DEL TEXTAREA
    textoEncriptado = input.value;

    //ENCRIPTAR
    for (let indice = 0; indice < textoEncriptado.length; indice++) {

        if (textoEncriptado[indice] === "ai") {
            textoSinEncriptar.replace("ai", "a");
        }
        if (textoEncriptado[indice] === "enter") {
            textoSinEncriptar.replace("enter", "e");
        }
        if (textoEncriptado[indice] === "imes") {
            textoSinEncriptar.replace("imes", "i");
        }
        if (textoEncriptado[indice] === "ober") {
            textoSinEncriptar.replace("ober", "o");
        }
        if (textoEncriptado[indice] === "ufat") {
            textoSinEncriptar.replace("ufat", "u");
        }
    }

    mostrarResultado(textoSinEncriptar);

    botonCopiar.style.display = "block";

}

//FUNCIÓN COPIAR AL PORTAPAPELES
function copiar(){
    //BORRAMOS EL FORMATEO INICIAL PARA MOSTRAR EL CONTENIDO Y EL MUÑECO SEGÚN EL TAMAÑO DE PANTALLA
    document.querySelector(".aside__output-container").classList.remove("justify-content-start");
    document.querySelector(".aside__output-container").classList.remove("align-item-left");

    //AGREGA EL MÉTODO PARA COPIAR AL CLIPBOARD
    let contenidoACopiar = document.querySelector(".contenido-output p").textContent;
    navigator.clipboard.writeText(contenidoACopiar);
    
    //ELIMINA EL CONTENIDO AL COPIAR PARA MOSTRAR MÁS ADELANTE EL "INGRESA EL TEXTO..."
    document.querySelector(".contenido-output p").textContent = "";
    botonCopiar.style.display = "none";
   
    /*
    NECESITAMOS MOSTRAR EL MENSAJE DE INSERTE... EN EL MOMENTO QUE DAMOS COPIAR
    */
    output.classList.remove("ocultar");
    output.classList.add("mostrar");

    /*
    CON ESTA LÓGICA NOS ASEGURAMOS QUE EL MUÑECO SE MUESTRE AL APRETAR COPIAR SOLAMENTE CUÁNDO EL TAMAÑO
    DE PANTALLA SEA EL DE ESCRITORIO. TENÍAMOS EL PROBLEMA QUE AL MOSTRAR EL MUÑECO SIN ESTA CONDICIONAL
    EL MUÑECO SE HACÍA EVIDENTE EN UN TAMAÑO TABLET Y CELULAR, LO CUÁL NO ERA DESEADO.
    */
    if(window.innerWidth >= 1200 ) {
        munieco.classList.remove("ocultar");
        munieco.classList.add("mostrar");
    }

    //MOSTRAR EL TEXTO "INGRESE..." CON UNA ALINEACIÓN CENTRAL
    document.querySelector(".contenido-output p").textContent = "Ingresa el texto que desees encriptar o desencriptar";
    document.querySelector(".contenido-output p").style.textAlign = "center";

}


//EVENTOS
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);

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







