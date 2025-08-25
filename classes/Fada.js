let Criatura = require("../Criatura");

class Fada extends Criatura {
    constructor(nome, energia) {
        super(nome, "Bola de Luz Arco-Íris", energia);
}

agir() {
    console.log(`\n\t${this.nome} ataca com ${this.ataqueMagico}!!!`);
    this.alterarEnergia(-15);
}
}

module.exports = Fada;
