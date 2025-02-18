let nome = 'Caio';
let exp = 61000;
let nivel = '';


//Um dos erros foi não definir a variável nível que é onde iria armazenar resultado deste if,
//Outro erro foi não colocar o igual como atribuição ao nível, ex: certo> nível = ("Ferro") / errado> nivel ("Ferro")
//Usei uma estrutura tbm de Switch, porém não deu muito certo pq ele não funciona bem com expressões booleanas pois ele compara valores diretamente, não condições lógicas.
//Outro coisa foi isso ex: certo> else if(exp >= 1001 && exp <= 2000) / errado> else if(exp > 1001 && exp <= 2000). Pois nesse caso eu perco o 1001 e todos os outros.


if (exp <= 1000) {
  nivel = 'Ferro';
} else if (exp >= 1001 && exp <= 2000) {
  nivel = 'Bronze';
} else if (exp >= 2001 && exp <= 5000) {
  nivel = 'Prata';
} else if (exp >= 5001 && exp <= 7000) {
  nivel = 'Ouro';
} else if (exp >= 7001 && exp <= 8000) {
  nivel = 'Platina';
} else if (exp >= 8001 && exp <= 9000) {
  nivel = 'Ascendente';
} else if (exp >= 9001 && exp <= 10000) {
  nivel = 'Imortal';
} else {
  nivel = 'Radiante';
}


console.log(
  'O jogador ' + nome + ' possui ' + exp + ' xp, e seu nivel é ' + nivel
);
