//console.log("script.js cargado correctamente");
function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value <= 0 || fano.value > ano) {
    window.alert("[erro] Verifique os dados novamente!");
  } else {
    //window.alert('Tudo ok!') //Testado
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);// var idade e igual a0 valor(Number) que sera digitado no input txtano
    //console.log("Idade calculada:", idade); para testar codigo en consola
    //window.alert(idade) //testado
    //res.innerHTML = `Idade calculada: ${idade}`;// para probar si o calculo da idade esta funcionando //testado ok

    var género = '';
    var img = document.createElement("img");
    img.setAttribute('id', 'foto') //para criar um  elemento novo ao HTML desde teu JS
    if (fsex[0].checked) { //Verificar se a casilha 0 do input tipo radio esta marcada /teste ok
      género = "Homen";
        if (idade >= 0 && idade < 10) {
        //CRIANÇA
        img.setAttribute("src", "bebehome.png");
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute("src", "jovemhome.png");
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute("src", "homeadulto.png");
      } else {
        //IDOSO
        img.setAttribute("src", "homemaior.png");
      }
    } else if (fsex[1].checked) { //Verificar se a casilha 1 do input tipo radio esta marcada
      género = "Mulher";
      if (idade >= 0 && idade < 10) {  //Vai depende de esse rango de idade mudar a img
        //CRIANÇA
        img.setAttribute("src", "bebemulher.png");
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute("src", "jovemmulher2.png");
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute("src", "mulheradulta.png");
      } else {
        //IDOSO
        img.setAttribute("src", "mulhermaior.png");
      }
  }
  
   res.style.textAlign = "center"; // alinhar a div "res"
   res.innerHTML = `Detectamos ${género} com ${idade} anos`; // nunca colocar entre parentesis sempre lembrar que va entre aspas babaca
   res.appendChild(img); // para hacer aparecer la imagen depues del res.HTML
}
}