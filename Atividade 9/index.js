var a = Number(prompt("Digite o primeiro número: "));
var b = Number(prompt("Digite o segundo número: "));
var c = Number(prompt("Digite o terceiro número: "));

maiorNumero(a, b, c);

function maiorNumero(a, b, c) {
    if (a > b && a > c) {
        alert("O maior número é: " + a);
    } else if (b > a && b > c) {
        alert("O maior número é: " + b);
    } else {
        alert("O maior número é: " + c);
    }
}

function ordemCrescente(a, b, c) {
    const numeros = [a, b, c]

    numeros.sort((d, e) => d - e)
    alert("A ordem crescente ficou: " + numeros);
}

ordemCrescente(a, b, c);