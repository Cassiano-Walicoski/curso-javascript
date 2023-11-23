// LET - Pode ser acessada somente do escopo onde ela foi declarada (criada) ou para frente, ou seja para proximos escopos que forem criados dentro do escopo inicial onde a variável foi criada. A variável LET também pode ter seu valor alterado a qualquer momento

"use strict"

let carro="EcoSport";
carro="Fox";
carro=10;

console.log(carro);

function teste(){
    let nome="Cassiano";
    if (true){
        console.log(`Aqui estou acessando a variável de um escopo a frente de onde a variável foi criada. Resultado: ${nome}`);
    }
    console.log(`Aqui estou acessando a variável do mesmo escopo onde a variável foi criada. Resultado: ${nome}`);
}

teste();

console.log(`Aqui estou tentando acessar a variável fora do escopo onde ela foi crida, ou seja um escopo anterior onde ela foi declarada, então não é possivel acessala. Resultado: ${nome} = erro.`);