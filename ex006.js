function tabuada(){
    var numero = document.getElementById('num')
    var tab = document.getElementById('msg')
    var num = Number(numero.value)
    var res

    if(numero.value.length == 0){
        alert('[ERROR]! Campo precisa estar preenchido')
    } else {
        tab.innerHTML = `Tabuada do ${num}<br><br>`

        for(var i = 0; i <= 10; i++){
            res = num * i
            tab.innerHTML += `${num} x ${i} = ${res} <br>`
        }
        tab.innerHTML += '<br>'
    }

    
}