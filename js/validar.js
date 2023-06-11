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

    for(let i = 0; i < simbolosEspeciales.length; i++) {
        if (textoSinEncriptar === simbolosEspeciales[i]) {
            return "No puedes ingresar símbolos especiales";
        }
    }

    for(let i = 0; i < letrasConAcento.length; i++) {
        if (textoSinEncriptar === letrasConAcento[i]) {
            return "No puedes ingresar letras con acento";
        }
    }

    for(let i = 0; i < numeros.length; i++) {
        if (textoSinEncriptar === numeros[i]) {
            return "No puedes ingresar números";
        }
    }

    for(let i = 0; i < letrasMayusculas.length; i++) {
        if (textoSinEncriptar === letrasMayusculas[i]) {
            return "No puedes ingresar letras mayúsculas";
        }
    }

    for(let i = 0; i < textoSinEncriptar.length; i++) {
        if (
            textoSinEncriptar.includes(a_encriptado) || textoSinEncriptar.includes(e_encriptado) ||
            textoSinEncriptar.includes(i_encriptado) || textoSinEncriptar.includes(o_encriptado) || textoSinEncriptar.includes(u_encriptado) 
           ) 
        {
            return "No puedes encriptar un texto ya encriptado";
        }
    }

    return true;
}


function validarTextoADesencriptar(textoEncriptado) {
    const simbolosEspeciales = ["|","°","¬","!","\"","@","#","·","$","~","%","½","&","¬","/","{","(","[",")","]","=","}","?","'","¿","¡","¸","´","¨","+","*","^","`",",","•",";",".","·",":","-","_"];
    const letrasConAcento = ["Á","Ć","É","Ǵ","Í","Ḱ","Ĺ","Ḿ","Ń","Ó","Ṕ","Ŕ","Ś","Ú","Ǘ","Ẃ","Ý","Ź","ć","ǵ","ḱ","ĺ","ḿ","ń","ṕ","ŕ","ś","ǘ","ẃ","ý","ź","á", "é", "í", "ó", "ú"]; 
    const numeros = ["0","1","2","3","4","5","6","7","8","9"];
    const letrasMayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    const a_encriptado = "ai";
    const e_encriptado = "enter";
    const i_encriptado = "imes";
    const o_encriptado = "ober";
    const u_encriptado = "ufat";

    for(let i = 0; i < simbolosEspeciales.length; i++) {
        if (textoEncriptado === simbolosEspeciales[i]) {
            return "No puedes ingresar símbolos especiales";
        }
    }

    for(let i = 0; i < letrasConAcento.length; i++) {
        if (textoEncriptado === letrasConAcento[i]) {
            return "No puedes ingresar letras con acento";
        }
    }

    for(let i = 0; i < numeros.length; i++) {
        if (textoEncriptado === numeros[i]) {
            return "No puedes ingresar números";
        }
    }

    for(let i = 0; i < letrasMayusculas.length; i++) {
        if (textoEncriptado === letrasMayusculas[i]) {
            return "No puedes ingresar letras mayúsculas";
        }
    }

    /*
    for(let i = 0; i < textoEncriptado.length; i++) {
        if (
            !textoEncriptado.includes(a_encriptado) || !textoEncriptado.includes(e_encriptado) || 
            !textoEncriptado.includes(i_encriptado) || !textoEncriptado.includes(o_encriptado) || !textoEncriptado.includes(u_encriptado)
           ) 
        {
            return "No puedes desencriptar un texto ya desencriptado";
        }
    }
*/
    return true;
}



