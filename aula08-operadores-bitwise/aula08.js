/*

&
|
^
~
<<
>>

*/

//--------------------------------------------------------------------------//


/*
AND - Representado por &, seta um bit para 1, se os dois bits das duas posições comparadas forem 1, ou seja, retorna 1 se ambos os bits sejam 1:
*/
var valor1 = 5 // 0101 em binário
var valor2 = 1 // 0001 em binário

console.log(5 & 1) // 0001 = 1 em decimal
/*
0   1   0   1   = 5 em decimal
0   0   0   1   = 1 em decimal

resultado:
0   0   0   1   = 1 em decimal
*/


//--------------------------------------------------------------------------//


/*
OR - Representado por |, seta o bit comparado para 1 se um dos dois valores comparados tiverem a mesma posição com valor 1, ou seja, retorna 1 se qualquer um dos operandos seja 1.
*/
var valor1 = 5 // 0101 em binário
var valor2 = 1 // 0001 em binário

console.log(5 | 1) // 0101 = 5 em decimal

/*
0   1   0   1   = 5 em decimal
0   0   0   1   = 1 em decimal

resultado:
0   1   0   1   = 5 em decimal
*/


//--------------------------------------------------------------------------//


/*
XOR - Representado por ^ faz a mesma coisa que o OR, porém, só vai setar um bit para 1 se os bits forem diferentes, ou seja, retorna 1 se ambos os operandos forem diferentes e 0 em qualquer outro caso.
*/
var valor1 = 5 // 0101 em binário
var valor2 = 1 // 0001 em binário

console.log(5 ^ 10) // 0100

/*
0   1   0   1   = 5 em decimal
0   0   0   1   = 1 em decimal

resultado:
0   1   0   0   = 15 em decimal
*/

/*
Caso de uso:
O XOR é muito utilizado para criptografia de chaves. Imagine que temos duas pessoas querendo se comunicar – ambas conhecem uma chave comum, então a uma pessoa poderia enviar a mensagem criptografada e a outra poderia receber do outro lado usando o XOR:
*/
const chave = 19485
const mensagem = 42

// Antes de enviarmos, encriptamos a mensagem
const criptografada = mensagem ^ chave // 19511

// Ao recebermos o número 19511 saberemos que podemos aplicar a chave novamente
const descriptografada = criptografada ^ chave // 42

console.log(criptografada) // 19511
console.log(descriptografada) // 42


//--------------------------------------------------------------------------//


/*
NOT - Representado por ~, inverte todos os bits de um valor.
*/
var valor1 = 5 // 0101 em binário

~5 // 1010

/*
Caso de uso
Usando o operador ~ podemos checar se um elemento existe ou não em um array. Por exemplo, ao invés de usarmos o modelo tradicional:
*/
const y = [1,2,3,4,5,6]

if (y.indexOf(2) > -1) {} // forma 1

// Podemos simplesmente fazer da seguinte maneira:

const a = [1,2,3,4,5,6]

if (~a.indexOf(2)) {}
/*
Isso porque o ~ transforma o -1 em 0. Portanto, quando o item não existe, ele já retornaria false. Hoje temos o operador includes, que faz basicamente a mesma coisa.
*/


//--------------------------------------------------------------------------//


/*
Left Shift - Representado por <<, vai mover todos os valores uma posição para a esquerda, acrescentando um zero na ponta direita.
*/
var valor3 = 5 // 0101 em binário
var valor4 = 1 // 0001 em binário

5 << 1 // 1010
/*
Da mesma forma temos o Right Shift que se divide em duas partes:

Signed right shift: >> vai rotacionar os bits para a direita, colocando uma cópia do bit mais à esquerda e ignorando o bit à direita

Zero fill right shift: >>> o mesmo que o anterior, porém, vai incluir um zero a partir da esquerda

Caso de uso:

Um dos grandes casos de uso para bitwise operators é que podemos operar multiplicações e divisões sobre qualquer número, apenas realizando um shift nos seus bits.

Isso é útil, por exemplo, quando estamos trabalhando com aplicações que exigem alto desempenho, como renderização 3D.

Se quisermos multiplicar um número por qualquer base de 2 (2^1=2, 2^2=4, 2^3=8), o segredo é realizar um left shift:
*/
5 * 2 // 10
5 << 1 // 10, só que mais rápido
/*
Veja que o número depois do operador << é o número de shifts que vamos fazer. Para cada shift temos o aumento de 1 na potência:
*/
5 * 4 // 5 << 2
5 * 8 // 5 << 3
5 * 1024 // 5 << 10
/*
Da mesma, forma se quisermos dividir, basta executarmos um right shift:
*/
5 / 2 // 5 >> 1
/*
Bônus
Podemos exibir o número de forma binária diretamente como string através do comando:

5..toString(2) // 101 (zero à esquerda é removido)
*/