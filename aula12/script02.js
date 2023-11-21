/*
JAVASCRIPT - CONDIÇÕES parte 2
CONDIÇÕES ANINHADAS
exemplo das horas
*/
var agora = new Date().getHours(); // pegando as horas atual do sistema
var hora = 20;
console.log(`Agora são exatamente ${hora} horas!`);

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora <= 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}