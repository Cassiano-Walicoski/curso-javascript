/*
&& -> and = e
|| -> or = ou
! -> not = não
*/

let n1=10
let n2=8
let n3=2
let n4=7


// Operador && = and(e)
//      V            V          = V
if ((n1 > n2) && (n3 < n4)) {
    console.log("VERDADEIRO")
} else {
    console.log("FALSO")
} // VERDADEIRO


// Operador || = or(ou)
//      V            V          = V
if ((n1 > n2) || (n3 < n4)) {
    console.log("VERDADEIRO")
} else {
    console.log("FALSO")
} // VERDADEIRO


// Operador && = and(e)
//      F            V          = F
if ((n1 < n2) && (n3 < n4)) {
    console.log("VERDADEIRO")
} else {
    console.log("FALSO")
} // FALSO


// Operador || = or(ou)
//      F            V          = V          
if ((n1 < n2) || (n3 < n4)) {
    console.log("VERDADEIRO")
} else {
    console.log("FALSO")
} // VERDADEIRO


// Operador ! = not(não)
//      F = V        V = F      = F          
if (!((n1 < n2) || (n3 < n4))) {
    console.log("VERDADEIRO")
} else {
    console.log("FALSO")
} // FALSO