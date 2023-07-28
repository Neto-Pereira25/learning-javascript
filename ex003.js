function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 13
    msg.innerHTML = `Agora são ${hora} horas. `
    if(hora >= 0 && hora < 12){
        // Bom dia
        msg.innerHTML += "Bom dia!!"
        img.src = './img/manha.jpg'
        document.body.style.background = "#4bbdcc"
    } else if(hora >= 12 && hora < 18){
        // Boa tarde
        msg.innerHTML += "Boa tarde!!"
        img.src = './img/tarde.jpg'
        document.body.style.background = "#804419"
    } else {
        // Boa noite
        msg.innerHTML += "Boa noite!!"
        img.src = './img/noite.jpg'
        document.body.style.background = "#221980"
    }
}