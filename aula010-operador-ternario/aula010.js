/*
? -> Retorna um valor caso a condição for verdadeira (true)
: -> Retorna um valor caso a condição for falsa (false)

Teste lógico ? se verdadeiro : se falso
*/


let num = 10//Number(prompt("Dígite um número:"))
let res = (!(num % 2) ? "Par" : "Ímpar")

if (res == "Par") {
    //alert(`O número ${num} é PAR`)
    console.log(`O número ${num} é PAR`)
} else {
    //alert(`O número ${num} é ÍMPAR`)
    console.log(`O número ${num} é ÍMPAR`)
}


let n1 = 8
let n2 = 10

let resultado = (n1 < n2 ? "menor" : "maior")
console.log (`${n1} é ${resultado} que ${n2}`)


let numero1 = 90 
let r = ((numero1 % 2 === 0) ? `${numero1} é PAR` : `${numero1} é ÍMPAR`)
console.log(r)