/*
    var // Ele é utilizado globalmente
    let // Ele é gerado dentro de um escopo
    const // Ele é gerado dentro de um escopo porém podemos armazenar dados apenas 1x
*/

var cachorro = "Kyara"
console.log(cachorro)

cachorro = "Teca"
console.log(cachorro)

let lanche = "Bolovo"
console.log(lanche)

lanche = "Misto Quente"
console.log(lanche)

const nome = "Ian"
console.log(nome)

nome = "Ian Rodrigues" // Não vai funcionar
console.log(nome)