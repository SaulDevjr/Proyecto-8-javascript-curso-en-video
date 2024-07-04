//hora atual do sistema operativo
var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente as ${hora} horas`);

if (hora > 23 || hora < 6) {
  console.log("Boa madrugada");
} else if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
