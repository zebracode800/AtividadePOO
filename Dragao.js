let Criatura = require("./Criatura");

class Dragao extends Criatura {
    constructor(nome, energia) {
        super(nome, "Sopro de Fogo Infernal", energia);
}

agir() {
    console.log(`${this.nome} lança ${this.ataqueMagico}!`);
    this.alterarEnergia(-30);
}
}

module.exports = Dragao;
