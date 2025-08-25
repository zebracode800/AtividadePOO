class Criatura {
nome;
ataqueMagico;
#energia;
    
    constructor(nome, ataqueMagico, energia) {
        this.nome = nome;
        this.ataqueMagico = ataqueMagico;
        this.#energia = energia; // inicialização direta
    }
    
    alterarEnergia(valor) {
        this.#energia += valor;
        if (this.#energia < 0) {
            this.#energia = 0;
        }
        console.log(`${this.nome} agora tem ${this.#energia} de energia.`);
    }
    
    agir() {
        console.log(`${this.nome} usa ${this.ataqueMagico}!`);
        this.alterarEnergia(-10);
    }
    
    descansar() {
        this.alterarEnergia(15);
        console.log(`${this.nome} descansou. Energia restaurada!`);
    }
    }
    
module.exports = Criatura;

