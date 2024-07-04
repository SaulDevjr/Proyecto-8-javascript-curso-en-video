var agora = new Date();
var diaSem = agora.getDay();

/* js toma los dias de la semana con valores del 0 al 7
 Domingo =0
 Segunda =1
 Terça =2
 Quarta =3
 Quinta =4
 Sexta =5
 Sabado =5
*/
//console.log(diaSem);

switch (diaSem) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break
    case 3: 
    console.log('Quarta')
    break
    case 4: 
    console.log('Quinta')
    break
    case 5: 
    console.log('Sexta')
    break
    case 6: 
    console.log('Sexta')
    case 7: 
    console.log('Sabado')
    default:
        console.log('[ERRRO] comando invalido!')
}
