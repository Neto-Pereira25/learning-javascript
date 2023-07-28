function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente!!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', './img/menino.jpg')
            } else if(idade < 21){
                //Adolescente
                img.setAttribute('src', './img/garoto.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', './img/homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', './img/idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', './img/menina.jpg')
            } else if(idade < 21){
                //Adolescente
                img.setAttribute('src', './img/garota.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', './img/mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', './img/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}