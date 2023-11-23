// VAR - Pode ser acessada idepndente do escopo em que foi declarada (criada). A variável VAR também pode ter seu valor alterado a qualquer momento

"use strict"

let carro="EcoSport";
carro="Fox";
carro=10;

console.log(carro);

if(true){
    var nome="Cassiano";
    console.log(`Aqui está correto ela ser acessada. Resultado: ${nome}`);
}

console.log(`Aqui ela não deveria poder ser ser acessada, porém com o uso de VAR isso é possivel. Resultado: ${nome}`);