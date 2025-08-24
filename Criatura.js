// Arquivo: classes/Criatura.js
class Criatura {
    nome;
    ataqueMagico;
    #energia = 100;

    constructor(nome, ataqueMagico) {
        this.nome = nome;
        this.ataqueMagico = ataqueMagico;
    }

    alterarEnergia(valor) {
        this.#energia = Math.max(0, Math.min(100, this.#energia + valor));
        console.log(`${this.nome} agora tem ${this.#energia} de energia.`);
    }

    agir() {
        if (this.#energia <= 0) return console.log(`${this.nome} está exausto!`);
        console.log(`${this.nome} usa ${this.ataqueMagico}!`);
        this.alterarEnergia(-10);
    }

    descansar() {
        if (this.#energia >= 100) return console.log(`${this.nome} não precisa descansar.`);
        console.log(`${this.nome} descansou. Energia restaurada!`);
        this.alterarEnergia(15);
    }

    get energia() {
        return this.#energia;
    }
}

module.exports = Criatura;
