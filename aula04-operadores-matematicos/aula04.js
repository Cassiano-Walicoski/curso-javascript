// OPERADORES MATEMÁTICOS

// ORDEM DE PRECEDÊNCIA:
/*  ()
    **
    *  /  %
    +  -
*/

// OPERADORES DE INCREMENTO E DECREMENTO
/*
    ++ SOMA 1
    -- SUBTRAI 1
    +=1 SOMA 1
    -=1 SUBTRAI 1
*/

let num1=0, num2=0;

num1=10;
num2=8;

let resultado=(num1+num2)*2;

console.log(resultado);

let num3=10, num4=9, num5=9, num6=5;

num3++; // Resultado: 11
num4+=1 // Resultado: 10
// += é igual a num4 = num4 + 1

num5--; // Resultado: 8
num6-=1 // Resultado: 4

console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);

for (let num=0; num <= 10; num++) {
    console.log(num);
}