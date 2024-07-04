//idade para votar
var idade= 17
console.log(`Voce tem ${idade} anos.`)

if (idade < 16) {
    console.log('Nao vota')
}
else if (idade < 18 || idade > 65) {
    console.log('Voto é opcional')
}
else {
    console.log('Voto e obrigatorio')
}