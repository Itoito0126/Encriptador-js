const TextArea = document.querySelector(".AreaTexto");
const Mensaje = document.querySelector(".Mensaje");


let MatrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function Encriptar(StringEncriptada){
    StringEncriptada = StringEncriptada.toLowerCase();

    for(let i =0; i < MatrizCodigo.length; i++){
        if(StringEncriptada.includes(MatrizCodigo[i][0])){
            StringEncriptada = StringEncriptada.replaceAll(MatrizCodigo[i][0], MatrizCodigo[i][1]);
        }
    }
    return StringEncriptada;
}

function Desencriptar(StringDesencriptada){
    StringDesencriptada = StringDesencriptada.toLowerCase();

    for(let i =0; i < MatrizCodigo.length; i++){
        if(StringDesencriptada.includes(MatrizCodigo[i][1])){
            StringDesencriptada = StringDesencriptada.replaceAll(MatrizCodigo[i][1], MatrizCodigo[i][0]);
        }
    }
    return StringDesencriptada;
}

function BotonEncriptar(){
    const TextoEncriptado = Encriptar(TextArea.value);
    Mensaje.value = TextoEncriptado;
    TextArea.value = "";
}

function BotonDesencriptar(){
    const TextoEncriptado = Desencriptar(TextArea.value);
    Mensaje.value = TextoEncriptado;
    TextArea.value = "";
}

function CopiarTexto(){
    let TempInput = document.createElement("input");
    TempInput.value = Mensaje.value;
    document.body.appendChild(TempInput);
    TempInput.select();
    document.execCommand("copy");
    document.body.removeChild(TempInput);
}