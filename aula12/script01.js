/*
JAVASCRIPT - CONDIÇÕES parte 2
CONDIÇÕES ANINHADAS
exemplo da idade
*/
var idade = 22;
if (idade < 16) {
    console.log("Não vota!");
} else if (idade < 18 || idade > 65) {
    console.log("Voto opcinal!");
} else {
    console.log("Voto obrigatório!");
}