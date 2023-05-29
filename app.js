const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const input = document.querySelector("textarea");
const output = document.querySelector(".contenido-output h2");
const munieco = document.querySelector(".img-munieco");
const contenidoOutput = document.querySelector(".aside__output-container");
const botonCopiar = document.getElementById("copiar");

let textoEncriptado;
let textoSinEncriptar;


function ocultar(){
    output.classList.add("ocultar");
    munieco.classList.add("ocultar");
    
}

function alinearContenidoArriba() {
    contenidoOutput.classList.add("justify-content-start");
}

function alinearContenidoIzquierda() {
    contenidoOutput.classList.add("align-item-left");
}

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar() {
    ocultar();
    alinearContenidoArriba();
    alinearContenidoIzquierda();
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
    ocultar();
    alinearContenidoArriba();
    alinearContenidoIzquierda();
    let a_encriptado = "ai";
    let e_encriptado = "enter";
    let i_encriptado = "imes";
    let o_encriptado = "ober";
    let u_encriptado = "ufat";


    let textoEncriptado = input.value;

    textoSinEncriptar = textoSinEncriptar.replace(a_encriptado, "a")
                                           .replace(e_encriptado, "e") 
                                           .replace(i_encriptado, "i")
                                           .replace(o_encriptado, "o")
                                           .replace(u_encriptado, "u"); 

    $contenido = document.querySelector(".contenido-output p "); 
    
    
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
}


botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botonCopiar.addEventListener("click", copiar);








