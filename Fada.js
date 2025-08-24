const Criatura = require('./Criatura.js');

class Fada extends Criatura {
    constructor(nome) {
        super(nome, 'Bola de Luz Arco-Íris');
    }

    agir() {
        if (this.energia <= 0) return console.log(`${this.nome} está exausto!`);

        this.alterarEnergia(-15);

        let totalDano = 0;
        for (let i = 0; i < 10; i++) {
            totalDano += Math.floor(Math.random() * 7); 
        }

        console.log(`${this.nome} ataca com ${this.ataqueMagico}!`);
        console.log(`Dano total dos 10 ataques: ${totalDano}`);
    }
}

module.exports = Fada;
