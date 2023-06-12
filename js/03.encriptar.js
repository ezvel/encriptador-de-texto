const $botonEncriptar = document.querySelector(".boton-encriptar");

function encriptarTexto(textoSinEncriptar) {
    let textoEncriptado = "";

    const a_encriptado = "ai";
    const e_encriptado = "enter";
    const i_encriptado = "imes";
    const o_encriptado = "ober";
    const u_encriptado = "ufat";
  
    textoEncriptado = textoSinEncriptar.replaceAll("i", i_encriptado)
                                       .replaceAll("a", a_encriptado)
                                       .replaceAll("e", e_encriptado)
                                       .replaceAll("o", o_encriptado)
                                       .replaceAll("u", u_encriptado);

    return textoEncriptado;
}


$botonEncriptar.addEventListener("click", () => {
    const $input = document.querySelector("textarea");
    let textoSinEncriptar = $input.value;

    const textoValidado = validarTextoAEncriptar(textoSinEncriptar);

    if (textoValidado === true) {
        let textoEncriptado;
        textoEncriptado = encriptarTexto(textoSinEncriptar);
    
        formatearSalida();
        ocultarMuniecoYTextoAntesDelResultado();
    
        mostrarResultado(textoEncriptado);
        
        mostrarBotonCopiar(); 
    } else {
        const $mensajeErrorParrafo = document.getElementById('mensaje-de-error');
        const $textarea = document.querySelector('textarea');
        $textarea.classList.add('border-red');
        $mensajeErrorParrafo.textContent = "* " + textoValidado;
        $mensajeErrorParrafo.classList.add('red');
    }
});