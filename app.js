const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const input = document.querySelector("textarea");
const output = document.querySelector(".contenido-output h2");
const munieco = document.querySelector(".img-munieco");
const contenidoOutput = document.querySelector(".aside__output-container");
const botonCopiar = document.getElementById("copiar");

let textoEncriptado;
let textoSinEncriptar;


/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

/*.aside__output-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    background-color: #FFFFFF;
    border-radius: 20px;
    min-width: 300px;
    height: 100%;
    box-shadow:.5px .5px 20px 0px #DDDDDD, -.5px -.5px 20px 0px #DDDDDD;
}*/

function encriptar() {
    //EL ELEMENTO SE ALINEA DE UNA FORMA CUÁNDO DICE INSERTE.... QUE CUÁNDO SE MUESTRA EL RESULTADO
    document.querySelector(".aside__output-container").classList.add("justify-content-start");
    document.querySelector(".aside__output-container").classList.add("align-item-left");
    
    output.classList.remove("mostrar");
    output.classList.add("ocultar");
    munieco.classList.remove("mostrar");
    munieco.classList.add("ocultar");

    let a_encriptado = "ai";
    let e_encriptado = "enter";
    let i_encriptado = "imes";
    let o_encriptado = "ober";
    let u_encriptado = "ufat";


    textoSinEncriptar = input.value;

    textoEncriptado = textoSinEncriptar.replace("a",a_encriptado)
                                           .replace("e", e_encriptado) 
                                           .replace("i", i_encriptado)
                                           .replace("o", o_encriptado)
                                           .replace("u", u_encriptado); 

    $contenido = document.querySelector(".contenido-output p");                                       
    

    document.querySelector(".contenido-output p").textContent = "";
    document.querySelector(".contenido-output p").textContent = textoEncriptado;

    $contenido.style.color = "#495057"; 
    $contenido.style.lineHeight = "150%";
    $contenido.style.textAlign = "left";
    $contenido.style.width = "100%";
    $contenido.style.verticalAlign = "top";

    input.value = "";

    botonCopiar.style.display = "block";


}


function desencriptar() {
    //EL ELEMENTO SE ALINEA DE UNA FORMA CUÁNDO DICE INSERTE.... QUE CUÁNDO SE MUESTRA EL RESULTADO
    document.querySelector(".aside__output-container").classList.add("justify-content-start");
    document.querySelector(".aside__output-container").classList.add("align-item-left");

    output.classList.remove("mostrar");
    output.classList.add("ocultar");
    munieco.classList.remove("mostrar");
    munieco.classList.add("ocultar");2

    let a_encriptado = "ai";
    let e_encriptado = "enter";
    let i_encriptado = "imes";
    let o_encriptado = "ober";
    let u_encriptado = "ufat";


    textoEncriptado = input.value;

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


    $contenido = document.querySelector(".contenido-output p"); 
    
    
    document.querySelector(".contenido-output p").textContent = "";
    document.querySelector(".contenido-output p").textContent = textoSinEncriptar;

    $contenido.style.color = "#495057"; 
    $contenido.style.lineHeight = "150%";
    $contenido.style.textAlign = "left";
    $contenido.style.width = "100%";
    $contenido.style.verticalAlign = "top";

    input.value = "";

    botonCopiar.style.display = "block";



}

function copiar(){
    document.querySelector(".aside__output-container").classList.remove("justify-content-start");
    document.querySelector(".aside__output-container").classList.remove("align-item-left");

    let contenidoACopiar = document.querySelector(".contenido-output p").textContent;
    navigator.clipboard.writeText(contenidoACopiar);
    
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

    document.querySelector(".contenido-output p").textContent = "Ingresa el texto que desees encriptar o desencriptar";
    document.querySelector(".contenido-output p").style.textAlign = "center";

}


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







