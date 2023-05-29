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

function encriptar() {
    output.classList.remove("mostrar");
    output.classList.add("ocultar");
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
    output.classList.remove("mostrar");
    output.classList.add("ocultar");
    munieco.classList.add("ocultar");

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
    let contenidoACopiar = document.querySelector(".contenido-output p").textContent;
    navigator.clipboard.writeText(contenidoACopiar);
    
    document.querySelector(".contenido-output p").textContent = "";
    botonCopiar.style.display = "none";
   

    output.classList.add("mostrar");
    document.querySelector(".contenido-output p").textContent = "Ingresa el texto que desees encriptar o desencriptar";
    document.querySelector(".contenido-output p").style.textAlign = "center";

}


botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);








