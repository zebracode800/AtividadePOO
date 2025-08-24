const Criatura = require('./Criatura.js');

class Dragao extends Criatura {
    constructor(nome) {
        super(nome, 'Sopro de Fogo Infernal'); 
    }

    agir() {
        if (this.energia <= 0) return console.log(`${this.nome} está exausto!`);
        
        this.alterarEnergia(-30);

        let totalDano = 0;
        for (let i = 0; i < 6; i++) {
            totalDano += Math.floor(Math.random() * 6) + 5; 
        }

        console.log(`${this.nome} lança ${this.ataqueMagico}!`);
        console.log(`Dano total dos 6 ataques: ${totalDano}`);
    }
}

module.exports = Dragao;
