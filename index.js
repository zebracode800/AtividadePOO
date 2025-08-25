let Fada = require("./classes/Fada");
let Dragao = require("./classes/Dragao");
let Gnomo = require("./classes/Gnomo");
let Morte = require("./classes/Morte");

let fada = new Fada("Desespero", 100);
let dragao = new Dragao("NhacNhac", 100);
let gnomo = new Gnomo("Green", 100);
let morte = new Morte("Carol", 100);

console.log("\n|| ================= [ Ações das Criaturas ] ================= ||");
fada.agir();
dragao.agir();
gnomo.agir();
morte.agir();

console.log("\n|| ================= [ Descanso das Criaturas ] ================= ||\n");
fada.descansar();
dragao.descansar();
gnomo.descansar();
morte.descansar();