function validarIncluyeSimbolosEspeciales(texto, simbolosEspeciales) {
    for(let i = 0; i < simbolosEspeciales.length; i++) {
        if (texto.includes(simbolosEspeciales[i])) {
            return true;
        }
    }
}

function validarIncluyeLetrasConAcento(texto, letrasConAcento) {
    for(let i = 0; i < letrasConAcento.length; i++) {
        if (texto.includes(letrasConAcento[i])) {
            return true;
        }
    }
}

function validarIncluyeNumeros(texto, numeros) {
    for(let i = 0; i < numeros.length; i++) {
        if (texto.includes(numeros[i])) {
            return true;
        }
    }
}

function validarIncluyeMayusculas(texto, letrasMayusculas) {
    for(let i = 0; i < letrasMayusculas.length; i++) {
        if (texto.includes(letrasMayusculas[i])) {
            return true;
        }
    }
}

function validarTextoAEncriptar(textoSinEncriptar) {
    const simbolosEspeciales = ["|","°","¬","!","\"","@","#","·","$","~","%","½","&","¬","/","{","(","[",")","]","=","}","?","'","¿","¡","¸","´","¨","+","*","^","`",",","•",";",".","·",":","-","_"];
    const letrasConAcento = ["Á","Ć","É","Ǵ","Í","Ḱ","Ĺ","Ḿ","Ń","Ó","Ṕ","Ŕ","Ś","Ú","Ǘ","Ẃ","Ý","Ź","ć","ǵ","ḱ","ĺ","ḿ","ń","ṕ","ŕ","ś","ǘ","ẃ","ý","ź","á", "é", "í", "ó", "ú"]; 
    const numeros = ["0","1","2","3","4","5","6","7","8","9"];
    const letrasMayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const a_encriptado = "ai";
    const e_encriptado = "enter";
    const i_encriptado = "imes";
    const o_encriptado = "ober";
    const u_encriptado = "ufat";


    for(let i = 0; i < textoSinEncriptar.length; i++) {
        if(validarIncluyeSimbolosEspeciales(textoSinEncriptar[i], simbolosEspeciales) === true) {
            return "No puedes incluir símbolos especiales";
        }
        if(validarIncluyeNumeros(textoSinEncriptar[i], numeros) === true) {
            return "No puedes incluir números";
        }
        if(validarIncluyeMayusculas(textoSinEncriptar[i], letrasMayusculas) === true) {
            return "No puedes incluir mayúsculas"; 
        }
        if(validarIncluyeLetrasConAcento(textoSinEncriptar[i], letrasConAcento) === true) {
            return "No puedes incluir letras con acentos";
        }
    }

    if (
        textoSinEncriptar.includes(a_encriptado) || textoSinEncriptar.includes(e_encriptado) ||
        textoSinEncriptar.includes(i_encriptado) || textoSinEncriptar.includes(o_encriptado) || textoSinEncriptar.includes(u_encriptado) 
       ) 
    {
        return "No puedes encriptar un texto ya encriptado";
    }
    
    return true;
}


function validarTextoADesencriptar(textoEncriptado) {
    const simbolosEspeciales = ["|","°","¬","!","\"","@","#","·","$","~","%","½","&","¬","/","{","(","[",")","]","=","}","?","'","¿","¡","¸","´","¨","+","*","^","`",",","•",";",".","·",":","-","_"];
    const letrasConAcento = ["Á","Ć","É","Ǵ","Í","Ḱ","Ĺ","Ḿ","Ń","Ó","Ṕ","Ŕ","Ś","Ú","Ǘ","Ẃ","Ý","Ź","ć","ǵ","ḱ","ĺ","ḿ","ń","ṕ","ŕ","ś","ǘ","ẃ","ý","ź","á", "é", "í", "ó", "ú"]; 
    const numeros = ["0","1","2","3","4","5","6","7","8","9"];
    const letrasMayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    for(let i = 0; i < textoEncriptado.length; i++) {
        if(validarIncluyeSimbolosEspeciales(textoEncriptado[i], simbolosEspeciales) === true) {
            return "No puedes incluir símbolos especiales";
        }
        if(validarIncluyeNumeros(textoEncriptado[i], numeros) === true) {
            return "No puedes incluir números";
        }
        if(validarIncluyeMayusculas(textoEncriptado[i], letrasMayusculas) === true) {
            return "No puedes incluir mayúsculas"; 
        }
        if(validarIncluyeLetrasConAcento(textoEncriptado[i], letrasConAcento) === true) {
            return "No puedes incluir letras con acentos";
        }
    }

    return true;

}



