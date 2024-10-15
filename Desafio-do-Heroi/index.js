// Entadas de dados sobre o Heroi
let nameHero = "Hero";
let xpHero = 8500;
let levelHero = "";

// Laço de repetição 
if (xpHero <= 1000) { 
  levelHero = "Ferro";
} else if (xpHero >= 1001 && xpHero <= 2000) {
  levelHero = "Bronze"; 
} else if (xpHero >= 2001 && xpHero <= 5000) {
  levelHero = "Prata"; 
} else if (xpHero >= 5001 && xpHero <= 7000) {
  levelHero = "Ouro"; 
} else if (xpHero >= 7001 && xpHero <= 8000) {
  levelHero = "Platina"; 
} else if (xpHero >= 8001 && xpHero <= 9000) {
  levelHero = "Ascendente"; 
} else if (xpHero >= 9001 && xpHero <= 10000) {
  levelHero = "Imortal"; 
} else {
  levelHero = "Radiante"; 
}

// Saida. Mensagem 
console.log("Heroi de nome: " + nameHero + ", está no nível: " + levelHero);

