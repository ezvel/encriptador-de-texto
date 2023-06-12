const $botonDesencriptar = document.querySelector(".boton-desencriptar");


function desencriptarTexto(textoEncriptado){
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


$botonDesencriptar.addEventListener("click", () => {
    const $input = document.querySelector("textarea");
    let textoEncriptado = $input.value;                       

    const textoValidado = validarTextoADesencriptar(textoEncriptado);

    if(textoValidado === true) {
        textoSinEncriptar = desencriptarTexto(textoEncriptado);
        
        formatearSalida();
        ocultarMuniecoYTextoAntesDelResultado();  
    
        mostrarResultado(textoSinEncriptar);
    
        mostrarBotonCopiar();
    } else{
        console.log(textoValidado);
    }
});