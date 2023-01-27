let num = 1;
let num_soma = 2;
let texto = "";
while(num_soma <= 10){
    num = num + num_soma;
    num_soma++
    texto += "O número é " + num + ".</br>"
    document.getElementById("resul").innerHTML=texto;
}