function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var agora = new Date();
    var hora = agora.getHours();
    msg.innerHTML = `Agora sao ${hora} horas..`;
  
    if (hora >= 0 && hora < 12) {
      //BOM DIA!
      img.src = "manha.png";
      document.body.style.background = "#afc9da";
    } else if (hora >= 12 && hora < 18) {
      //BOA TARDE!
      img.src = "tarde.png";
      document.body.style.background = "#fcd26a";
    } else {
      //BOA NOITE!
      img.src = 'noite.png';
      document.body.style.background = "#3c4a56";
    }
  }