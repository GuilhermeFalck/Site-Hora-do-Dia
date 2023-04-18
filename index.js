function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    //Bom dia
    img.src = `./imagens/manha.png`;
    document.body.style.background = `#eedfcc`;
  } else if (hora >= 12 && hora < 18) {
    //Boa tarde
    img.src = `./imagens/tarde.png`;
    document.body.style.background = `#f1bb6b`;
  } else {
    //Boa noite
    img.src = `./imagens/noite.png`;
    document.body.style.background = `#264c7d`;
  }
}
