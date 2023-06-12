const $botonCopiar = document.getElementById("copiar");

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

function copiarAlClipboard(){
    let contenidoACopiar = document.querySelector(".contenido-output p").textContent;
    navigator.clipboard.writeText(contenidoACopiar);
}


$botonCopiar.addEventListener("click", copiar);
