let Criatura = require("./Criatura");

class Gnomo extends Criatura {
    constructor(nome, energia) {
        super(nome, "Chuva de Cogumelos Tóxicos", energia);
}

agir() {
    console.log(`${this.nome} invoca ${this.ataqueMagico}!`);
    this.alterarEnergia(-5);
}
}

module.exports = Gnomo;