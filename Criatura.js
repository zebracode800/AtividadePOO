class Criatura {
    nome;
    ataqueMagico;
    #energia = 100;

    constructor(nome, ataqueMagico) {
        this.nome = nome;
        this.ataqueMagico = ataqueMagico;
    }

    agir() {
        if (this.#energia <= 0) return console.log(`${this.nome} está exausto!`);
        this.#energia -= 10;
        console.log(`${this.nome} usa ${this.ataqueMagico}! Energia: ${this.#energia}`);
    }

    descansar() {
        if (this.#energia >= 100) return console.log(`${this.nome} não precisa descansar.`);
        this.#energia += 15;
        console.log(`${this.nome} descansou. Energia: ${this.#energia}`);
    }
}

module.exports = Criatura;

