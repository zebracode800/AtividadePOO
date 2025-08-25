let Criatura = require("./Criatura");

class Morte extends Criatura {
    constructor(nome, energia) {
        super(nome, "Toque da Escuridão Eterna", energia);
}

agir() {
    console.log(`${this.nome} invoca o ${this.ataqueMagico}!`);
    this.alterarEnergia(-25);
}
}

module.exports = Morte;