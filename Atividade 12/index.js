
function janelaFechada(){
    clearImg();
    
    let element = document.createElement('img');
    element.setAttribute("src","janelaFechada.jpg");
    element.setAttribute("id","janela");
    element.setAttribute("onmouseover","janelaAberta()");
    
    element.setAttribute("width","500");
    element.setAttribute("height","600");
    
    document.getElementById("generate").appendChild(element);
}

function janelaQuebrada(){
    clearImg();

    let element = document.createElement('img');
    element.setAttribute("src","janelaQuebrada.jpg");
    element.setAttribute("id","janela");
    element.setAttribute("onmouseleave","janelaFechada()");

    element.setAttribute("width","500");
    element.setAttribute("height","600");

    document.getElementById("generate").appendChild(element);
}

function janelaAberta(){
    clearImg();
    
    let element = document.createElement('img');
    element.setAttribute("src","janelaAberta.jpg");
    element.setAttribute("id","janela");
    element.setAttribute("onmouseleave","janelaFechada()");
    element.setAttribute("onclick","janelaQuebrada()");
    
    element.setAttribute("width","500");
    element.setAttribute("height","600");

    document.getElementById("generate").appendChild(element);
}

function clearImg(){
    try{
        let element = document.getElementById("janela");
        element.parentNode.removeChild(element);
    }catch{}
}