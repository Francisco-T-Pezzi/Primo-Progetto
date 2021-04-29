function carregar(){
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var min  = data.getMinutes()
    //var hora = 19
    msg.innerHTML = `Ora sono ${hora}:${(min)} ore.`
}