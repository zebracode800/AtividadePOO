let Criatura = require("../Criatura");

class Morte extends Criatura {
    constructor(nome, energia) {
        super(nome, "Toque de 10 segundos", energia);
}

agir() {
    console.log(`\n\t${this.nome} invoca o ${this.ataqueMagico}!!!`);
    this.alterarEnergia(-35);
}
}

module.exports = Morte;