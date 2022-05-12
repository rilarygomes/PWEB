function Retangulo(altura, largura) {
    this.altura = altura;
    this.largura = largura;

    this.calculaArea = function() {
        return this.altura * this.largura;
    }
}
var altura;
altura = Number(prompt("Digite a altura do retângulo: "));

var largura;
largura = Number(prompt("Digite a largura do retângulo: "));

objRetangulo = new Retangulo(altura, altura);

alert("A área do retângulo é: " + objRetangulo.calculaArea());