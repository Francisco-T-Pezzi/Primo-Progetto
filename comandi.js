function carregar(){
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var min  = data.getMinutes()
    msg.innerHTML = `Ora sono ${hora}:${(min)} ore.`
}

function carregar_dia(){
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()

    msg.innerHTML = `Oggi è ${dia}/${mes}/${ano}.`
}

function mudaFoto(foto) {
    document.getElementById("icone").src=foto;
}