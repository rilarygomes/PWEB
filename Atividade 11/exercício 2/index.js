function Conta(nomeCorrentista, banco, numConta, saldo) {
    this.nomeCorretista = nomeCorrentista;
    this.banco = banco;
    this.numConta = numConta;
    this.saldo = saldo;
}

function ContaCorrente(nomeCorrentista, banco, numConta, saldo) {
    Conta.call(this, nomeCorrentista, banco, numConta, saldo);

    this.setSaldoEspecial = function(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }
}

var contaCorrente = new ContaCorrente("Rilary", "Inter", "111", "200,00");
contaCorrente.setSaldoEspecial("900,00");
alert("Dados da conta corrente: " + JSON.stringify(contaCorrente, null, 2));


function ContaPoupanca(nomeCorrentista, banco, numConta, saldo) {
    Conta.call(this, nomeCorrentista, banco, numConta, saldo);

    this.setJuros = function(juros) {
        this.juros = juros;
    }
}

var contaPoupanca = new ContaPoupanca("Ryan", "Nubank", "123", "2000,00");
contaPoupanca.setJuros("0,02");
alert("Dados da conta poupanca: " + JSON.stringify(contaPoupanca, null, 2));