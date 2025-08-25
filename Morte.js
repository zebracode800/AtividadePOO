// Arquivo: classes/Morte.js
const Criatura = require('./Criatura.js');

class Morte extends Criatura {
    ataqueRapido;
    ataqueSupremo;

    constructor(nome) {
        super(nome);
        this.nome = nome;
        this.ataqueMagico = 'Toque de 10 Segundos'; // ataque normal
        this.ataqueRapido = 'Foisada Rápida';       // ataque rápido
        this.ataqueSupremo = { 
            nome: 'Grito do Arrebatamento', 
            dano: 250 
        }; // ataque supremo atualizado
    }

    agir() {
        this.alterarEnergia(-15);
        return `${this.nome} ataca com ${this.ataqueMagico}!`;
    }


    agirRapido() {
        this.alterarEnergia(-10);

        let totalDano = 0;
        for (let i = 0; i < 4; i++) {
            totalDano += Math.floor(Math.random() * 16) + 10; // 10 a 25
        }

        return `${this.nome} usa ${this.ataqueRapido}! Dano total dos 4 golpes: ${totalDano}`;
    }

    // Ataque supremo
    usarSupremo() {
        this.alterarEnergia(-50);
        return `${this.nome} usa ${this.ataqueSupremo.nome}! Dano: ${this.ataqueSupremo.dano}`;
    }
}

module.exports = Morte;
