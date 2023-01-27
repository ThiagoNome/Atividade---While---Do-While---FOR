let jogador1 = prompt ("Escolha um número de 1 ao 10 'jogador 1' ");
let jogador2 = prompt ("Tente advinhar o número do 'jogaro 1' ");
let texto = "";
let tentativas = 1;

while (jogador1 != jogador2){
    jogador2 = prompt ("Tente advinhar o número do 'jogador 1 '")
    tentativas++;
    if (jogador2 == jogador1){
        texto = "O segundo jogador acertou o número " + jogador1 + " em " + tentativas + " tentativas. ";
        document.getElementById("resul").innerHTML=texto;
    }
}
if (jogador2 == jogador1){
    texto = "O segundo jogador acertou o número " + jogador1 + " em " + tentativas + " tentativas. ";
    document.getElementById("resul").innerHTML=texto;
}