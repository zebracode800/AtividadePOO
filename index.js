let Fada = require("./classes/Fada");
let Dragao = require("./classes/Dragao");
let Gnomo = require("./classes/Gnomo");
let Morte = require("./classes/Morte");

// Inicializando cada criatura já com energia = 100
let fada = new Fada("Luzinha", 100);
let dragao = new Dragao("Smaug", 100);
let gnomo = new Gnomo("Tompé", 100);
let morte = new Morte("Ceifador", 100);

console.log("\n--- Ações das Criaturas ---");
fada.agir();
dragao.agir();
gnomo.agir();
morte.agir();

console.log("\n--- Descanso das Criaturas ---");
fada.descansar();
dragao.descansar();
gnomo.descansar();
morte.descansar();