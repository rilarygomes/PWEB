function toUpper(){
    var valorCaixaTexto = document.forms.formulario1.elements["texto"];
    var valorMaiusculo = document.forms.formulario1.elements["maiusculo"];
    document.forms.formulario1.elements["minusculo"].checked = false;

    if(valorMaiusculo.checked == true){
        valorCaixaTexto.value = String(valorCaixaTexto.value).toUpperCase();
    }
}

function toLower(){
    var valorCaixaTexto = document.forms.formulario1.elements["texto"];
    var valorMinusculo = document.forms.formulario1.elements["minusculo"];
    document.forms.formulario1.elements["maiusculo"].checked = false;

    if(valorMinusculo.checked == true){
        valorCaixaTexto.value = String(valorCaixaTexto.value).toLowerCase();
    }
}





